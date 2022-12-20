//eplenavn
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[0].data());
    let epleinfo = document.querySelector(".epleinfo");
     console.log("epleinfo", epleinfo);
    epleinfo.innerHTML = snapshot.docs[0].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });

//jordbærnavn
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[1].data());
    let jordbærinfo = document.querySelector(".jordbærinfo");
     console.log("jordbærinfo", jordbærinfo);
    jordbærinfo.innerHTML = snapshot.docs[1].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });

//banannavn
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[2].data());
    let bananinfo = document.querySelector(".bananinfo");
     console.log("bananinfo", bananinfo);
    bananinfo.innerHTML = snapshot.docs[2].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[0].data());
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[1].data());
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
  })
  .catch((err) => {
    console.log(err);
  });

//bananbeskrivelse
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[2].data());
    console.log(snapshot.docs[2].data().Beskrivelse);
    let bananbeskrivelse = document.querySelector(".bananbeskrivelse");
     console.log("bananbeskrivelse", bananbeskrivelse);
    bananbeskrivelse.innerHTML = snapshot.docs[2].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  });
//eplebeskrivelse
db.collection("frukt")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[0].data());
     console.log(snapshot.docs[0].data().Beskrivelse);
    let eplebeskrivelse = document.querySelector(".eplebeskrivelse");
     console.log("eplebeskrivelse", eplebeskrivelse);
    eplebeskrivelse.innerHTML = snapshot.docs[0].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  });

//jordbærbeskrivelse
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[1].data());
     console.log(snapshot.docs[1].data().Beskrivelse);
    let jordbærbeskrivelse = document.querySelector(".jordbærbeskrivelse");
     console.log("jordbærbeskrivelse", jordbærbeskrivelse);
    jordbærbeskrivelse.innerHTML = snapshot.docs[1].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  });

//bananpris
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[2].data());
     console.log(snapshot.docs[2].data().Beskrivelse);
    let bananpris = document.querySelector(".bananpris");
     console.log("bananpris", bananpris);
    bananpris.innerHTML = snapshot.docs[2].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

//eplepris
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[0].data());
     console.log(snapshot.docs[0].data().Beskrivelse);
    let eplepris = document.querySelector(".eplepris");
     console.log("eplepris", eplepris);
    eplepris.innerHTML = snapshot.docs[0].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

//jordbærpris
db.collection("frukt")
  .get()
  .then((snapshot) => {
     console.log(snapshot.docs[1].data());
     console.log(snapshot.docs[1].data().Beskrivelse);
    let jordbærpris = document.querySelector(".jordbærpris");
     console.log("jordbærpris", jordbærpris);
    jordbærpris.innerHTML = snapshot.docs[1].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

  //potetnavn
  db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[1].data());
    let potetinfo = document.querySelector(".potetinfo");
    console.log("potetinfo", potetinfo);
    potetinfo.innerHTML = snapshot.docs[1].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });

//potetpris
db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[1].data());
    console.log(snapshot.docs[1].data().Beskrivelse);
    let potetpris = document.querySelector(".potetpris");
    console.log("potetpris", potetpris);
    potetpris.innerHTML = snapshot.docs[1].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

  //potetbeskrivelse
db.collection("Grønnsaker")
.get()
.then((snapshot) => {
  console.log(snapshot.docs[1].data());
  console.log(snapshot.docs[1].data().Beskrivelse);
  let potetbeskrivelse = document.querySelector(".potetbeskrivelse");
  console.log("potetbeskrivelse", potetbeskrivelse);
  potetbeskrivelse.innerHTML = snapshot.docs[1].data().Beskrivelse;
})
.catch((err) => {
  console.log(err);
});

  //tomatnavn
  db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[0].data());
    let tomatinfo = document.querySelector(".tomatinfo");
    console.log("tomatinfo", tomatinfo);
    tomatinfo.innerHTML = snapshot.docs[0].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });
  
  //tomatpris
  db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[0].data());
    console.log(snapshot.docs[0].data().Beskrivelse);
    let tomatpris = document.querySelector(".tomatpris");
    console.log("tomatpris", tomatpris);
    tomatpris.innerHTML = snapshot.docs[0].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

   //tomatbeskrivelse
db.collection("Grønnsaker")
.get()
.then((snapshot) => {
  console.log(snapshot.docs[0].data());
  console.log(snapshot.docs[0].data().Beskrivelse);
  let tomatbeskrivelse = document.querySelector(".tomatbeskrivelse");
  console.log("tomatbeskrivelse", tomatbeskrivelse);
  tomatbeskrivelse.innerHTML = snapshot.docs[0].data().Beskrivelse;
})
.catch((err) => {
  console.log(err);
});

  //gressnavn
  db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
    let gressinfo = document.querySelector(".gressinfo");
    console.log("gressinfo", gressinfo);
    gressinfo.innerHTML = snapshot.docs[2].data().Navn;
  })
  .catch((err) => {
    console.log(err);
  });

//gresspris
db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
    console.log(snapshot.docs[2].data().Beskrivelse);
    let gresspris = document.querySelector(".gresspris");
    console.log("gresspris", gresspris);
    gresspris.innerHTML = snapshot.docs[2].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });
  
  //gressbeskrivelse
  db.collection("Grønnsaker")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
    console.log(snapshot.docs[2].data().Beskrivelse);
    let gressbeskrivelse = document.querySelector(".gressbeskrivelse");
    console.log("gressbeskrivelse", gressbeskrivelse);
    gressbeskrivelse.innerHTML = snapshot.docs[2].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  }); 


//skinkenavn
db.collection("Kjøtt")
.get()
.then((snapshot) => {
  console.log(snapshot.docs[1].data());
  let skinkeinfo = document.querySelector(".skinkeinfo");
  console.log("skinkeinfo", skinkeinfo);
  skinkeinfo.innerHTML = snapshot.docs[1].data().Navn;
})
.catch((err) => {
  console.log(err);
});

//skinkepris
db.collection("Kjøtt")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[1].data());
    console.log(snapshot.docs[1].data().Beskrivelse);
    let skinkepris = document.querySelector(".skinkepris");
    console.log("skinkepris", skinkepris);
    skinkepris.innerHTML = snapshot.docs[1].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

  //skinkebeskrivelse
  db.collection("Kjøtt")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[1].data());
    console.log(snapshot.docs[1].data().Beskrivelse);
    let skinkebeskrivelse = document.querySelector(".skinkebeskrivelse");
    console.log("skinkebeskrivelse", skinkebeskrivelse);
    skinkebeskrivelse.innerHTML = snapshot.docs[1].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  }); 

  //biffnavn
db.collection("Kjøtt")
.get()
.then((snapshot) => {
  console.log(snapshot.docs[2].data());
  let biffinfo = document.querySelector(".biffinfo");
  console.log("biffinfo", biffinfo);
  biffinfo.innerHTML = snapshot.docs[2].data().Navn;
})
.catch((err) => {
  console.log(err);
});

//biffpris
db.collection("Kjøtt")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
    console.log(snapshot.docs[2].data().Beskrivelse);
    let biffpris = document.querySelector(".biffpris");
    console.log("biffpris", biffpris);
    biffpris.innerHTML = snapshot.docs[2].data().Pris;
  })
  .catch((err) => {
    console.log(err);
  });

  //biffbeskrivelse
  db.collection("Kjøtt")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[2].data());
    console.log(snapshot.docs[2].data().Beskrivelse);
    let biffbeskrivelse = document.querySelector(".biffbeskrivelse");
    console.log("biffbeskrivelse", biffbeskrivelse);
    biffbeskrivelse.innerHTML = snapshot.docs[2].data().Beskrivelse;
  })
  .catch((err) => {
    console.log(err);
  }); 