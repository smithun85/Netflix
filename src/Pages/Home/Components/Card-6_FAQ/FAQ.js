import React, { useState } from 'react';
import {FaPlus , FaTimes} from 'react-icons/fa'
// import addIcon from '../../../../Assets/add.png'

function FAQ() {

  const data = [
    {
      question: 'What is Netflix?',
      answer1: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.`,

       answer2:`You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`},
    {
      question: `How much does Netflix cost?`,
      answer1: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`
    },
    {
      question: `Where can I watch?`,
      answer1: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.`,
       answer2: `You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
    {
      question: `How do i cancel?`,
      answer1: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.`
    },
    {
      question: `What can I watch on Netflix?`,
      answer1: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
    },
    {
      question: `Is Netflix good for kids?`,
      answer1: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.`,
       answer2: `Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.`
    },
  ]

  const [selected,setSelected] = useState(null);
  const handleSelect = (i)=>{
    if(selected===i){
        return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>

      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faqBox">
          <div className="item">

            {
              data.map((item,i) => {      //i=>index
                return (
                  < div className='wrapper' key={i}>                  
                    <div className="question"  onClick={ ()=>handleSelect(i)}>
                    
                      <p>{item.question }</p>
                      {selected===i ? <FaTimes color='white'/> : <FaPlus color='white'/>}
                      {/* <img src={addIcon} alt="" /> */}
                    </div>
                    <div className={selected===i ? 'answer active' : 'answer'} >
                      <p>{item.answer1}</p><br />
                      <p>{item.answer2}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>

        <form action="" className='email'>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>

          <div>
            <input type="email" placeholder='Email address' />
            <button>Get Started &nbsp; &gt; </button>
          </div>
        </form>
      </section>


      <div className="border"></div>

    </>
  )
}

export default FAQ











// <div className='faqContent '>

// <div className='question'>
//   <h3>What is Netflix? <span>+</span></h3>
// </div>
// <div className="answer">
//   <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.</p>
//   <p>You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
// </div>
// </div>

// <div className='faqContent '>
// <div className='question'>
//   <h3> How much does Netflix cost?<span>+</span></h3>
// </div>
// <div className="answer">
//   <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
// </div>
// </div>

// <div className='faqContent '>
// <div className='question'>
//   <h3>Where can I watch? <span>+</span></h3>
// </div>
// <div className="answer">
//   <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
//   <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
// </div>
// </div>

// <div className='faqContent '>
// <div className='question'>
//   <h3>How do i cancel? <span>+</span></h3>
// </div>
// <div className="answer">
//   <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</p>

// </div>
// </div>

// <div className='faqContent '>
// <div className='question'>
//   <h3>What can I watch on Netflix? <span>+</span></h3>
// </div>
// <div className="answer">
//   <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
// </div>
// </div>

// <div className='faqContent '>
// <div className='question'>
//   <h3>Is Netflix good for kids? <span>+</span></h3>
// </div>
// <div className="answer">
//   <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
//   <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</p>
// </div>
// </div>