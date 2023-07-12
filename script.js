
       let user = document.getElementById("myuser")
       const button = document.getElementById("btn")
       let locationn = document.getElementById("location")
       let nameOfuser = document.getElementById("name")
       let bioOfUser = document.getElementById("bio")
       let followerOfuser = document.getElementById("follower")
       let publicRepoOfUser = document.getElementById("publicRepo")
       let portfolioOfUser = document.getElementById("port")
       let image = document.getElementById("image11")

       button.addEventListener("click",()=>{
        let username = user.value
           let url = `https://api.github.com/users/${username}`
            fetch(url).then(response=>response.json()).then((data)=>{
                console.log(data.location)
                locationn.innerHTML=data.location
                console.log(data.name)
                nameOfuser.innerHTML=data.name
                console.log(data.bio)
                bioOfUser.innerHTML=data.bio
                console.log(data.followers)
                followerOfuser.innerHTML = data.followers
                console.log(data.public_repos)
                publicRepoOfUser.innerHTML=data.public_repos
                console.log(data.html_url)
                image.src=data.avatar_url
                
            })
       })