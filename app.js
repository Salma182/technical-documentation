let blocks = document.querySelectorAll("pre");

    blocks.forEach((block)=> {
        if(navigator.clipboard) {
            const button = document.createElement('button');
            button.className= `bx bxs-copy-alt`;
            block.appendChild(button);
            button.style.color='red';
            button.addEventListener('click', async () => {copytext(block)
            });
        }
    });

    function copytext(block) {
        let code = block.querySelector("code");
        let text = code.innerText;
        navigator.clipboard.writeText(text);
         };