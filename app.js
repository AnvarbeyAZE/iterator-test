  const data = [
    {
      name : 'Jhon Doe',
      age:23,
      gender:'male',
      lookingfor:'female',
      location:'Boston Ma',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'

    },
    {
      name : 'Jhon Doe',
      age:22,
      gender:'male',
      lookingfor:'female',
      location:'Boston Ma',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'

    },
    {
      name : 'Jhon Doe',
      age:43,
      gender:'male',
      lookingfor:'female',
      location:'Boston Ma',
      image: 'https://randomuser.me/api/portraits/men/89.jpg'

    }
  ];

    const profile = profileIterator(data);

    //Call first profile
    nextProfile();

    //next event
    document.getElementById('next').addEventListener('click',
    nextProfile);

    //Function Next profile

    function nextProfile(){
      const currentProfile = profile.next().value;



      if(currentProfile !== undefined){
      document.getElementById('profileDisplay').
      innerHTML= `
      <ul class="list-group">
        <li class ="list-group-item">Name: ${currentProfile.name} </li>
        <li class ="list-group-item">Name: ${currentProfile.age} </li>
        <li class ="list-group-item">Name: ${currentProfile.location} </li>
        <li class ="list-group-item">Name: ${currentProfile.gender} </li>
        <li class ="list-group-item">Name: ${currentProfile.lookingfor} </li>
      </ul>
      `;

      document.getElementById('imageDisplay').innerHTML=
      ` <img src="${currentProfile.image}">`;
    } else{
      window.location.reload();
    }


    }



  //Profile iterator
  function profileIterator(profiles){
    let nextIndex = 0;

    return {
      next : function(){
        return nextIndex  < profiles.length ?
         {value :profiles[nextIndex ++],done:false}:
         {done:true}
      }
    };

  }

