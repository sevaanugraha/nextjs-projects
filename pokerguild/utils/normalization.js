export const getVenues = (result) => {
    const initialValue = [
        {
        id: "all",
        name: "All",
        name_furigana: "All",
        shortname: "All",
        }
    ];

    return [...initialValue, ...result]
};

export const getGameTypes = (result) => {
    const initialValue = [
        {
        id: "all",
        name: "All",
        name_eng: "All",
        },
    ];

    return [...initialValue, ...result]
};

export const getLimitTypes = (result) => {
    const initialValue = [
      {
        id: "all",
        name: "All",
        name_eng: "All",
      },
    ];

    return [...initialValue, ...result]
};

export const normalizeTournament = ({
    venues,
    gameTypes,
    limitTypes,
    tournament
}) => {
    return {
        ...tournament,
        venue: venues.find((i) => tournament?.venue_id === i.id),
        gameType: gameTypes.find((i) => tournament?.game_type_id === i.id),
        limitType: limitTypes.find((i) => tournament?.limit_type_id === i.id),
    }
}

export const normalizeTournaments = ({
    venues,
    gameTypes,
    limitTypes,
    tournaments
}) => {
    return tournaments.map(() => normalizeTournament({
        venues,
        gameTypes,
        limitTypes,
        tournament
    }))
}
