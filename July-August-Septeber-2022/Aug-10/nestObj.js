var student = {
    data: [
      {
        name: {
          first: "Rahul",
          last: "Jaiswal",
        },
        location: {
          India: {
            State: [
              {
                name: "MH",
                city: [
                  {
                    name: "Nagpur", //pune
                    area: {
                      sector: "1002",
                    },
                  },
                ],
              },
              {},
            ],
          },
        },
      },
      {},
      {},
    ],
    info: {
      college: "xyz",
      uni: "xyz",
    },
  };

  console.log(student.data[0].location.India.this.state[0].area.sector);


  
  //Print the Sector Value
  //Update City and Print it