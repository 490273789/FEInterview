$.ajax({
          type: "GET",
          url: "http://160.46.83.156/QRCode.asp",
          success: function(data){
              console.log(data);
              if(data=="SUCCESSwithSSO"){
                 console.log('success');

              }else{
                  alert("Please Login!");
              }
          }
        });