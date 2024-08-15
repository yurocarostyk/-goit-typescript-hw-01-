type Details = {
    createAt: Date;
    updateAt: Date;
  };
  
  interface IInfo {
    title: string;
    likes: number;
    accounts: string[];
    status: "open" | "close";
    details?: Details;
  }
  
  const page1: IInfo = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
      createAt: new Date("2021-01-01"),
      updateAt: new Date("2021-05-01"),
    },
  };
  
  const page2: IInfo = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
  };