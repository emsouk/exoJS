import { timelineSteps } from "./timelineData";

export function renderTimeLine(timeline){
    for (let i = 0; i < timelineSteps.length; i++) {
        const step = timelineSteps[i];
        const stepElement = document.createElement('div');
        stepElement.classList.add(`timeline-${step.side}`);
        stepElement.innerHTML = `
          
                <li>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentcolor" 
                        class="h-5 w-5"><circle cx="3" cy="3" r="3"></circle>
                        >
                        <path 
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                        clip-rule="evenodd">
                        </path>
                        </svg>
                        </div>
                        <div class="timeline-${step.side}>">
                            <time class="font-mono italic">${step.year}</time>
                            <div class="text-lg font-black"><h4>${step.title}</h4></div>
                            <p>${step.text}</p>
                            
                        </div>
               
                </li>
            </div>
        `;
        document.querySelector(timeline).appendChild(stepElement);
    }
}