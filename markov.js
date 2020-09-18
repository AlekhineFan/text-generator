const text = "Note that there is no definitive agreement in the literature on the use of some of the terms that signify special cases of Markov processes. Usually the term  Markov chain  is reserved for a process with a discrete set of times, that is, a discrete time Markov chain but a few authors use the term Markov process to refer to a continuous time Markov chain without explicit mention. In addition, there are other extensions of Markov processes that are referred to as such but do not necessarily fall within any of these four categories  see Markov model . Moreover, the time index need not necessarily be real valued; like with the state space, there are conceivable processes that move through index sets with other mathematical constructs. Notice that the general state space continuous time Markov chain is general to such a degree that it has no designated term. While the time parameter is usually discrete, the state space of a Markov chain does not have any generally agreed on restrictions: the term may refer to a process on an arbitrary state space. However, many applications of Markov chains employ finite or countably infinite state spaces, which have a more straightforward statistical analysis. Besides time index and state space parameters, there are many other variations, extensions and generalizations  see Variations . For simplicity, most of this article concentrates on the discrete time, discrete state space case, unless mentioned otherwise. The changes of state of the system are called transitions. The probabilities associated with various state changes are called transition probabilities. The process is characterized by a state space, a transition matrix describing the probabilities of particular transitions, and an initial state or initial distribution across the state space. By convention, we assume all possible states and transitions have been included in the definition of the process, so there is always a next state, and the process does not terminate. A discrete time random process involves a system which is in a certain state at each step, with the state changing randomly between steps. The steps are often thought of as moments in time, but they can equally well refer to physical distance or any other discrete measurement. Formally, the steps are the integers or natural numbers, and the random process is a mapping of these to states. The Markov property states that the conditional probability distribution for the system at the next step  and in fact at all future steps  depends only on the current state of the system, and not additionally on the state of the system at previous steps.";
const order = 4;
const nGrams = {};

let btn = document.getElementById("button-generate");

const f = function() {
    for(let i = 0; i < text.length; i++){
        let nGram = (text.substring(i, i + order));

        if(!nGrams[nGram]){
            nGrams[nGram] = [];
        } else {
            nGrams[nGram].push(text.charAt(i + order));
        }
    }
    const resultingText = document.getElementById("result");
    
    let currentGram = text.substring(0, order);
    let result = currentGram;

    for(let i = 0; i < 1000; i++){
        let continuation = nGrams[currentGram];
            if(!continuation){
                break;
            }
        let next = getRandomElement(continuation);
        result += next;
        currentGram = result.substring(result.length - order, result.length);
    }
    resultingText.innerHTML = result;
 
    //console.log(nGrams);
}

btn.addEventListener("click", f);

function getRandomElement(array){
    let num = Math.floor(Math.random() * array.length);
  return array[num];
}


