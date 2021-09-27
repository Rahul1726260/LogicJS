const arr = [
    {
    Day: ["Monday"],
    type: "contractor",
    },
    
    {
    Day: ["Tuesday", "Thursday"],
    type: "Manager",
    },
    {
    Day: ["Friday", "Sunday"],
    type: "Lead",
    },
   ];

   let finalArray = [];
   arr.map((item) => {
    item.Day.forEach((e) => {
    finalArray.push({ Day: e, type: item.type });
    });
   });
   console.log(finalArray);