export interface Match {
  weekday: string;
  day: string;
  month: string;
  time: string;
  team1: { flag: string; name: string };
  team2: { flag: string; name: string };
  matchNumber: string;
  group: string;
  isHighlight: boolean;
}

export const matches: Match[] = [
  {
    day: "11",
    month: "Junio",
    weekday: "Jueves",
    time: "20:00 hrs",
    team1: { flag: "\ud83c\uddf0\ud83c\uddf7", name: "Corea del Sur" },
    team2: { flag: "\ud83c\udde8\ud83c\uddff", name: "Rep\u00fablica Checa" },
    matchNumber: "Partido 2",
    group: "Grupo A",
    isHighlight: false,
  },
  {
    day: "18",
    month: "Junio",
    weekday: "Jueves",
    time: "19:00 hrs",
    team1: { flag: "\ud83c\uddf2\ud83c\uddfd", name: "M\u00e9xico" },
    team2: { flag: "\ud83c\uddf0\ud83c\uddf7", name: "Corea del Sur" },
    matchNumber: "Partido 28",
    group: "Grupo A",
    isHighlight: true,
  },
  {
    day: "23",
    month: "Junio",
    weekday: "Martes",
    time: "20:00 hrs",
    team1: { flag: "\ud83c\udde8\ud83c\uddf4", name: "Colombia" },
    team2: { flag: "\ud83c\udde8\ud83c\udde9", name: "Congo DR" },
    matchNumber: "Partido 48",
    group: "Grupo K",
    isHighlight: false,
  },
  {
    day: "26",
    month: "Junio",
    weekday: "Viernes",
    time: "18:00 hrs",
    team1: { flag: "\ud83c\uddfa\ud83c\uddfe", name: "Uruguay" },
    team2: { flag: "\ud83c\uddea\ud83c\uddf8", name: "Espa\u00f1a" },
    matchNumber: "Partido 66",
    group: "Grupo H",
    isHighlight: false,
  },
];
