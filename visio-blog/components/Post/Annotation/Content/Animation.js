import { TypeAnimation } from "react-type-animation";

const Animation = ({ content, displayLimit = 1, animation, handlers }) => {
  if (animation === "typewriter") {
    return (
      <TypeAnimation
        sequence={[
          content ? content + " " : "",
          displayLimit * 1000,
          () => {
            if (handlers?.onEnd) {
              return handlers.onEnd();
            }

            return;
          },
        ]}
        cursor={false}
        wrapper="span"
        speed={1}
      />
    );
  }

  return content + " ";
};

export default Animation;
