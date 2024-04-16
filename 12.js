let score=JSON.parse(localStorage.getItem('score')) ||
            {
                wins:0,
                lose:0,
                ties:0
            }
            let timeout;
            document.querySelector('.js-resert').addEventListener('click',function resert(){
            
              
                document.querySelector('.js-conformation').innerHTML=`Are you want to resert score.
                <button class="js-yes" onclick="score.wins=0,
                score.lose=0,
                score.ties=0;
                localStorage.removeItem('score')
                updatescore();
                document.querySelector('.js-conformation').innerHTML='Score Reserted Succesfully'">Yes</button>
                <button class="js-no" onclick="updatescore();
                document.querySelector('.js-conformation').innerHTML='Not Reserted'
                ">No</button>`
                timeout=setTimeout(() => {
                    document.querySelector('.js-conformation').innerHTML=''; 
                },4000);
                })
                
            document.querySelector('.js1-button').addEventListener('click',()=>{
                playgame('rock')
            })
            document.querySelector('.js2-button').addEventListener('click',()=>{
                playgame('paper')
            })
            document.querySelector('.js3-button').addEventListener('click',()=>{
                playgame('scissors')
            })
              
            function updatescore()
            {
                document.querySelector('#js-score').innerText=`wins:  ${score.wins}, loss:  ${score.lose}, ties:  ${score.ties}`
            }
            updatescore();

            let isautoplaying=false;
            let intervalId;
            let autoplay=document.querySelector('.js-autoplay')

            autoplay.addEventListener('click',
            function autoplay(){
               if(!isautoplaying){
               intervalId= setInterval(function(){
                   systemmove();
                   const playermove=systemmove()
                   playgame(playermove);   
                   },1500);
                   isautoplaying=true;
              
               }
               else{
                   clearInterval(intervalId);
                   isautoplaying=false;
                   
               }    
           })

           autoplay.addEventListener('click', function namechanger(){
            if(autoplay.classList.contains('js-autoplay')){
           autoplay.classList.remove('js-autoplay')
           autoplay.classList.add('js-stop')
           autoplay.innerHTML='Stop Playing'
            }
            else if(autoplay.classList.contains('js-stop')){
                autoplay.classList.remove('js-stop')
                autoplay.classList.add('js-autoplay')
                autoplay.innerHTML='Auto play'
            }
           })

            function systemmove()
            {
             let number=Math.random();
                let computermove='';
                if (number>=0 && number<1/3){
                    computermove='rock'
                }
                else if(number>=1/3 && number<2/3){
                    computermove='paper'
                }
                else if(number>=2/3 && number<1){
                    computermove='scissors'
                }
                return computermove;

            }
            function playgame(playermove)
            {
                let computermove=systemmove();
                let result='';
                if(playermove==='rock')
                {
                    if (computermove==='rock')
                    {
                        result='tie'
                    }
                    else if(computermove=='paper')
                    {
                        result='lose'
                    }
                    else if(computermove=='scissors')
                    {
                        result='win'
                    }
                   
                }

                else if(playermove==='paper')
                {
                       if (computermove==='rock')
                        {
                            result='win'
                        }
                        else if(computermove=='paper')
                        {
                            result='tie'
                        }
                        else if(computermove=='scissors')
                        {
                            result='lose'
                        }
                      
                }
                
                else if(playermove==='scissors')
                {

                        if (computermove==='rock')
                        {
                            result='lose'
                        }
                        else if(computermove=='paper')
                        {
                            result='win'
                        }
                        else if(computermove=='scissors')
                        {
                            result='tie'
                        }
                        
                }       if(result==='win')
                            {
                                score.wins+=1;
                            }
                        else if( result==='lose')
                            {
                                score.lose+=1;
                            }
                        else if(result==='tie')
                            {
                                score.ties+=1;
                            }
                        localStorage.setItem('score',JSON.stringify(score))
                       updatescore();
                       document.querySelector('#js-result').innerHTML=result;
                       
                       document.querySelector('#js-moves').innerHTML=
                       `YOU <img src="${playermove}-emoji.png" class="css-img">
                       <img src="${computermove}-emoji.png" class="css-img"> COMPUTER`
                    
                    }