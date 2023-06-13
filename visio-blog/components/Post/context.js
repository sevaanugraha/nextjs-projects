import { createContext, useEffect, useReducer, useMemo } from "react";
import moment from "moment";

import {
  ACTION_TYPES,
  MODES,
  CONTROLS_PARENT_ELEMENT_CLASSNAME,
} from "ssr-pwa/components/Post/types";

export const initialState = {
  loading: true,
  currentAnnotationIndex: 0,
  currentAnnotation: {
    displayLimit: 1,
    content: "",
  },
  annotations: [],
  sound: "",
  mute: false,
  mode: "",
  startTime: "",
  pauseTime: "",
  hideControls: false,
};

export const PostContext = createContext(initialState);

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.INITIATE:
      if (!!Object.keys(payload).length) {
        let annotations = payload.annotations;
        let currentAnnotation = annotations[0];
        let sound = payload.sound.link;

        return {
          ...state,
          currentAnnotation,
          annotations,
          sound,
        };
      }

      return {
        ...state,
      };

    case ACTION_TYPES.PLAY:
      return {
        ...state,
        mode: MODES.PLAY,
      };

    case ACTION_TYPES.PAUSE:
      return {
        ...state,
        mode: MODES.PAUSE,
      };

    case ACTION_TYPES.REPLAY:
      const currentAnnotationIndex = 0;
      let currentAnnotation = state.annotations[currentAnnotationIndex];

      return {
        ...state,
        mode: MODES.PLAY,
        currentAnnotationIndex,
        currentAnnotation,
      };

    case ACTION_TYPES.PREVIOUS:
      if (state.currentAnnotationIndex === 0) {
        return {
          ...state,
        };
      } else {
        let currentAnnotationIndex = state.currentAnnotationIndex - 1;
        let currentAnnotation = state.annotations[currentAnnotationIndex];

        return {
          ...state,
          currentAnnotationIndex,
          currentAnnotation,
        };
      }

    case ACTION_TYPES.FORWARD:
      if (state.annotations.length - 1 === state.currentAnnotationIndex) {
        return {
          ...state,
          mode: MODES.END,
        };
      } else {
        let currentAnnotationIndex = state.currentAnnotationIndex + 1;
        let currentAnnotation = state.annotations[currentAnnotationIndex];

        return {
          ...state,
          currentAnnotationIndex,
          currentAnnotation,
        };
      }

    case ACTION_TYPES.ADD_START_TIME:
      return {
        ...state,
        startTime: payload,
      };

    case ACTION_TYPES.ADD_PAUSE_TIME:
      return {
        ...state,
        pauseTime: payload,
      };

    case ACTION_TYPES.UPDATE_CURRENT_DURATION:
      return {
        ...state,
        currentAnnotation: {
          ...state.currentAnnotation,
          displayLimit: payload,
        },
      };

    case ACTION_TYPES.TOGGLE_MUTE:
      return {
        ...state,
        mute: !state.mute,
      };

    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case ACTION_TYPES.SET_HIDE_CONTROLS:
      return {
        ...state,
        hideControls: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export function useMemoizedReducer(reducer, initialState) {
  return useReducer(
    useMemo(() => reducer, [reducer]),
    initialState
  );
}

export function useHideControls(dispatch) {
  var mousePostion = 0;

  const getParentsClassName = (elem) => {
    const parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
      const classList = elem?.classList;
      if (classList?.length > 0) {
        parents.push(...classList);
      }
    }
    return parents;
  };

  const show = () => {
    dispatch({
      type: ACTION_TYPES.SET_HIDE_CONTROLS,
      payload: false,
    });
  };

  const hide = (timeout = 0, position, shouldPauseHide) =>
    setTimeout(() => {
      if (position === mousePostion && shouldPauseHide === false) {
        dispatch({
          type: ACTION_TYPES.SET_HIDE_CONTROLS,
          payload: true,
        });
      }
    }, timeout);

  useEffect(() => {
    const isMobile = window.matchMedia('only screen and (max-width: 1024px)').matches

    if (!isMobile) {
      show();
      hide(6000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('only screen and (max-width: 1024px)').matches

    const handleMouseMove = (event) => {
      const pauseClassList = getParentsClassName(event?.srcElement);
      pauseClassList.push(event?.srcElement?.className);

      const position = !!event ? event?.clientX + event?.clientY : 0;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mousePostion = position;

      show();
      hide(
        6000,
        position,
        pauseClassList.includes(CONTROLS_PARENT_ELEMENT_CLASSNAME)
      );
    };

    if (!isMobile) {
      document.onmousemove = handleMouseMove;
    }

    return () => {
      document.onmousemove = null;
    };
  }, []);

  return null;
}

export const usePost = ({ data }) => {
  const [state, dispatch] = useMemoizedReducer(reducer, initialState);
  const disableAutoPlay =
    data?.annotationsAnimation ? data.annotationsAnimation === "typewriter" : false;

  useHideControls(dispatch);

  let interval;

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.INITIATE, payload: data });
    if (disableAutoPlay === false) {
      dispatch({
        type: ACTION_TYPES.ADD_START_TIME,
        payload: moment().toString(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    clearTimeout(interval);

    if (disableAutoPlay === false) {
      if (state.mode === MODES.PLAY) {
        let deductDuration = 0;

        if (state.pauseTime && state.startTime) {
          const pausedOnTime = moment(state.pauseTime);
          const startedOnTime = moment(state.startTime);

          const diff = pausedOnTime.diff(startedOnTime);
          const duration = moment.duration(diff);
          deductDuration = duration.as("seconds");
          const updatedcurrentAnnotation =
            state.currentAnnotation.displayLimit - deductDuration;

          if (
            state.currentAnnotation.displayLimit > 1 &&
            updatedcurrentAnnotation > 0
          ) {
            dispatch({
              type: ACTION_TYPES.UPDATE_CURRENT_DURATION,
              payload: updatedcurrentAnnotation,
            });
          }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        interval = setTimeout(() => {
          dispatch({ type: ACTION_TYPES.FORWARD });
        }, state.currentAnnotation.displayLimit * 1000);

        dispatch({
          type: ACTION_TYPES.ADD_START_TIME,
          payload: moment().toString(),
        });

        dispatch({
          type: ACTION_TYPES.ADD_PAUSE_TIME,
          payload: "",
        });
      }

      if (state.mode === MODES.PAUSE) {
        clearTimeout(interval);

        dispatch({
          type: ACTION_TYPES.ADD_PAUSE_TIME,
          payload: moment().toString(),
        });
      }
    }

    return () => {
      clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.mode, state.currentAnnotationIndex]);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.ADD_START_TIME,
      payload: moment().toString(),
    });

    dispatch({
      type: ACTION_TYPES.ADD_PAUSE_TIME,
      payload: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentAnnotationIndex]);

  const play = () => dispatch({ type: ACTION_TYPES.PLAY });

  const pause = () => dispatch({ type: ACTION_TYPES.PAUSE });

  const togglePlay = () => {
    if (state.mode === MODES.PLAY) {
      return pause();
    }

    return play();
  };

  const replay = () => dispatch({ type: ACTION_TYPES.REPLAY });

  const previous = () => dispatch({ type: ACTION_TYPES.PREVIOUS });

  const forward = () => dispatch({ type: ACTION_TYPES.FORWARD });

  const toggleMute = () => dispatch({ type: ACTION_TYPES.TOGGLE_MUTE });

  const fullScreen = () => {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) {
      /* Safari */
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      /* IE11 */
      document.body.msRequestFullscreen();
    }
  };

  const setLoading = (isloading) =>
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: isloading });

  return {
    state,
    bgColor: data.bgColor,
    image: data.thumbnailImage[0].link,
    author: data.author,
    title: data.title,
    p5ui: data.p5ui,
    nextPost: data.nextPost,
    annotationsContentByBox: data.annotationContentByBox,
    annotationsPosition: data.annotationsPosition,
    annotationsAnimation: data.annotationsAnimation,
    handlers: {
      play,
      pause,
      togglePlay,
      replay,
      previous,
      forward,
      toggleMute,
      fullScreen,
      setLoading,
    },
  };
};
