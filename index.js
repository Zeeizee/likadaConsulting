      
        // ############################### Global Objects ####################################
        // objects for cards details 
        console.log('first time running');
        alert('first time runing');

        var cardsObject= [{title:"FMCG-F&B", discription:"marketing and business planning",imgPath:"firm1.jpg"},
                {title:"FMCG-Knitware and apparel", discription:"Sourcing",imgPath:"dress.jpg"},
                {title:"Heavy industry consulting", discription:"from business development to sourcing",imgPath:"firm2.jpg"},
                {title:"Business management", discription:"IT solutions & services",imgPath:"business.jpg"},
                {title:"Strategic consulting", discription:"Including cybersecurity and smart ERP solutions",imgPath:"Strategic.jpg"}
            ];

        var refList = [
            {id:1,year: "2021",discription:"Strategy consulting for market entry",status:"Ongoing"},

            {id:2,year: "2021",discription:"L3/MES for metals industry",status:"Ongoing"},

            {id:3,year: "2021",discription:"Strategic sourcing",status:"Ongoing"},

            {id:4,year: "2021",discription:"Strategy business development",status:"Ongoing"},

            {id:5,year: "2021",discription:"Strategic sourcing",status:"Ongoing"},

            {id:6,year: "2021",discription:"Strategic sourcing",status:"Ongoing"},

            {id:6,year: "2020",discription:"Equipment sourcing",status:"Completed"},

            {id:6,year: "2020",discription:"Expediting, quality control and inspection",status:"Completed"},

            {id:6,year: "2020",discription:"Strategic sourcing",status:"Completed"},

            {id:6,year: "2020",discription:"Strategic sourcing",status:"Ongoing"},

            {id:6,year: "2019",discription:"L3/MES for metals industry",status:"Completed"},

            {id:6,year: "2019",discription:"Strategy consulting for market entry",status:"Completed"},


        ]

        
        var InPosts =
        [
            {id:"1", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6888701761230651392" height="900" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            },
            {id:"1", embCode:"<iframe src='https://www.linkedin.com/embed/feed/update/urn:li:share:6879612152127328256' height='900' width='100%' frameborder='0' allowfullscreen='' title='Embedded post'></iframe>"
            },
            {id:"2", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6873530475923808256" height="900" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            },
            {id:"3", embCode:"<iframe src='https://www.linkedin.com/embed/feed/update/urn:li:share:6866942702831968257' height='900' width='100%' frameborder='0' allowfullscreen='' title='Embedded post'></iframe>"
            },

            {id:"4", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6865512165223354369" height="900" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            },

            {id:"5", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6859848457780387840" height="722" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            },

            {id:"6", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6851441618709549056" height="591" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            },

            {id:"7", embCode:'<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6844198253895020544" height="646" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
            }
        ]

        var cardsLength="";
        var refLength="";
        var InPostsLength="";




        // #########################################on ready function #####################################
        $('document').ready(function(){
            objLengths();
            cardShow();
            refrenceListShow(refLength);
            linkedInEvents(InPostsLength);


            $('#checkboxClick').click(function(){
                if($(this).prop("checked") == true){
                    
                    // $("#menuBtn").toggleClass("HideBtn");
                    // $("#closeBtn").toggleClass("HideBtn");
                    document.getElementById("nav_list").style.left = "-100%";
                }
                else if($(this).prop("checked") == false){
                    // $("#menuBtn").toggleClass("HideBtn");
                    // $("#closeBtn").toggleClass("HideBtn");
                    document.getElementById("nav_list").style.left = "0%";
                    
                }
            });

            
        
        });

        
        // ##############################Toggle menu ###################################
        // nav_list


        document.getElementById("nav-item-fea").addEventListener("click", function() 
        {
            document.getElementById("nav_list").style.left = "-100%";
            if($("#checkboxClick").prop("checked") == true){
                $("#checkboxClick").prop("checked", false);
            }
            else
            {
                $("#checkboxClick").prop("checked", true);
            }
          });

        document.getElementById("nav-item-ref").addEventListener("click", function() 
        {
            document.getElementById("nav_list").style.left = "-100%";
            if($("#checkboxClick").prop("checked") == true){
                $("#checkboxClick").prop("checked", false);
            }
            else
            {
                $("#checkboxClick").prop("checked", true);
            }
          });
        document.getElementById("nav-item-upd").addEventListener("click", function() 
        {
            document.getElementById("nav_list").style.left = "-100%";
            if($("#checkboxClick").prop("checked") == true){
                $("#checkboxClick").prop("checked", false);
            }
            else
            {
                $("#checkboxClick").prop("checked", true);
            }
          });
        document.getElementById("nav-item-get").addEventListener("click", function() 
        {
            document.getElementById("nav_list").style.left = "-100%";
            if($("#checkboxClick").prop("checked") == true){
                $("#checkboxClick").prop("checked", false);
            }
            else
            {
                $("#checkboxClick").prop("checked", true);
            }
          });



        // ########################################length of objects #####################

        function objLengths()
        {
            
            if(cardsObject.length < 5)
            {
                cardsLength = cardsObject.length;
            }
            else
            {
                cardsLength = 5;
            }
            if(refList.length < 5)
            {
                refLength = refList.length;
            }
            else
            {
            refLength = 5;
            }
            if(InPosts.length < 2 )
            {
                InPostsLength = InPosts.length;
            }
            else
            {
                InPostsLength = 2;
            }

        }
        
        document.getElementById("myFrame").onload = function() {myFunction()};

    function myFunction() {
      document.getElementById("demo").innerHTML = "Iframe is loaded.";
    }


        // #####################################call refList ################################
        function callRef()
        {
            if(refList.length > refLength + 5  )
            {
                refLength+=5;
                // refrenceListShow(refLength);
                console.log(refrenceListShow(refLength));  // changed
            }
            else
            {
                refrenceListShow(refList.length);
            }


        }
        // #####################################call LinkedIn ################################
        function callLinked()
        {
            if(InPosts.length > InPostsLength + 2  )
            {
                InPostsLength += 2;
                linkedInEvents(InPostsLength);
            }
            else
            {
                linkedInEvents(InPosts.length);
            }


        }

        // ############################### Cards section ####################################

        function cardShow()
        {
            var featCards =""; 
            cardsObject.forEach(cObj=> {
                featCards+=
                `
                <div class="card mr-3 my-3"
                style=
                "
                background-image: url('../images/${cObj.imgPath}');
                background-size: cover;
                object-fit: contain;
                background-position: center;
                background-repeat: no-repeat;
                transition: all 1s;
                cursor: pointer;
                "
                >
                    <div class="innerCard">
                        <h5 class="cardHeading text-center text-uppercase ">
                            ${cObj.title}
                        </h5>
                    </div>
                    <p class="cardDeatils text-center">
                    ${cObj.discription}
                    </p>
                </div>

                `
                
            })

            document.getElementById("featuresCards").innerHTML = featCards;
        }
        
        
        // ############################### Cards section 2 ####################################

        // function cardShow()
        // {
        //     var featCards =""; 
        //     cardsObject.forEach(cObj=> {
                
        //         featCards+=
        //         `
        //         <div class="card mr-3 my-3"
        //         style=
        //         "
        //         background-image: url('../images/${cObj.imgPath}');
        //         background-size: cover;
        //         object-fit: contain;
        //         background-position: center;
        //         background-repeat: no-repeat;
        //         transition: all 1s;
        //         cursor: pointer;
        //         "
        //         >
        //             <div class="innerCard">
        //                 <h5 class="cardHeading text-center text-uppercase ">
        //                     ${cObj.title}
        //                 </h5>
        //             </div>
        //             <p class="cardDeatils text-center">
        //             ${cObj.discription}
        //             </p>
        //         </div>

        //         `
                
        //     })

        //     document.getElementById("featuresCards").innerHTML = featCards;
        // }

        // ####################################Reference List ################################
        function refrenceListShow(RLength)
        {
            var ref_count =0;
            var ref ="";
            refList.forEach(rObj=>{
                if(ref_count < RLength)
                {

                
                    ref +=
                    `
                        <tr>
                            <td>${rObj.year}</td>
                            <td>${rObj.discription}</td>
                            <td>${rObj.status}</td>
                        </tr>
                
                    `
                    ref_count+=1;
                }
            })

            document.getElementById("referenceList").innerHTML=ref;

        }

        // ####################################################LinkedInPosts####################################

        function linkedInEvents(InLength)
        {

            let InCount =0;
            let newPost ="";
            InPosts.forEach(InObj=>{

                if(InCount < InLength)
                {
                    newPost +=
                    `
                        <div class="inPost col-lg-6 col-md-6 col-sm-12 my-2" >
                            ${InObj.embCode}                
                        </div>        
                    `
                    InCount+=1;
                }


            })

            document.getElementById("LinkedInPosts").innerHTML= newPost;

        }

        // #################################################### msg__with fixed text####################################


        function fixed__msg()
        {
            document.getElementById("msg__textarea").value="Please, send me information about your privacy policy. Thank you.";
        }

        function default__modal()
        {
            document.getElementById("msg__textarea").value="";
        }

        // #################################################### sending a msg ####################################
      