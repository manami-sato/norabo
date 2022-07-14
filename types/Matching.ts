export type userData = {
  icon: string;
  name: string;
  cord: {
    friend: string;
    voice: string;
  };
  playstyle: string;
  rank: string;
  tag: string[];
}[];

export type modal = {
  text: string;
  attention: boolean;
}[];
