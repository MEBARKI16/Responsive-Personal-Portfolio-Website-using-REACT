import '../styles/Skills.css'
import {IoIosArrowDown} from 'react-icons/io'
import {BsBraces} from 'react-icons/bs'
import {FaSwatchbook} from 'react-icons/fa'
import {VscServerEnvironment} from 'react-icons/vsc'
const Skills = () => {
    const x1 = {width : '90%'};
    const x2 = {width : '80%'};
    const x3 = {width : '70%'};
    const x4 = {width : '75%'};
    const z = {fontSize: '2rem',color: 'var(--skin-color)', marginLeft : 'auto'}
    const w = {fontSize: '2rem',color: 'var(--skin-color)', marginRight : 'var(--mb-0-75)'}
    return (
        <section className='skills section' id='skills'>
          <h2 data-heading='My Abilities' className='section__title'>My Experience</h2>
          <div className='skills__container container grid'>
            <div className='skills__tabs'>
              <div className='skills__header skills__active' data-target='#frontend'>
                 <BsBraces style={w}/>
                  <div>
                    <h1 className='skills__title'>Frontend developer</h1>
                    <span className='skills__subtitle'>More than 2 years</span>
                  </div>
                  <IoIosArrowDown style={z}/>
              </div>
              <div className='skills__header' data-target='#backend'>
                <VscServerEnvironment style={w}/>
                  <div>
                    <h1 className='skills__title'>Backend developer</h1>
                    <span className='skills__subtitle'>More than 2 years</span>
                  </div>
                  <IoIosArrowDown style={z}/>
              </div>
              <div className='skills__header' data-target='#design'>
                <FaSwatchbook style={w}/>
                  <div>
                    <h1 className='skills__title'>UI / UX design</h1>
                    <span className='skills__subtitle'>More than 2 years</span>
                  </div>
                  <IoIosArrowDown style={z}/>
              </div>
            </div>
            <div className='skills__content'>
             <div className='skills__group' data-content id='frontend'>
               <div className='skills__List grid'>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>HTML</h3>
                      <span className='skills__number'>90%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x1}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>CSS</h3>
                      <span className='skills__number'>80%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x2}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>JavaScript</h3>
                      <span className='skills__number'>70%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x3}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>React</h3>
                      <span className='skills__number'>75%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x4}></span>
                    </div>
                 </div>
               </div>
             </div>
             <div className='skills__group' data-content id='design'>
               <div className='skills__List grid'>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>Figma</h3>
                      <span className='skills__number'>90%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x1}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>Sketch</h3>
                      <span className='skills__number'>80%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x2}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>PhotShop</h3>
                      <span className='skills__number'>70%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x3}></span>
                    </div>
                 </div>
               </div>
             </div>
             <div className='skills__group' data-content id='backend'>
               <div className='skills__List grid'>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>PHP</h3>
                      <span className='skills__number'>90%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x1}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>Java</h3>
                      <span className='skills__number'>80%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x2}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>MySql</h3>
                      <span className='skills__number'>70%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x3}></span>
                    </div>
                 </div>
                 <div className='skills__data'>
                   <div className='skills__titles'>
                      <h3 className='skills__name'>Firebase</h3>
                      <span className='skills__number'>75%</span>
                   </div>
                    <div className='skills__bar'>
                   <span className='skills__percentage' style={x4}></span>
                    </div>
                 </div>
               </div>
             </div>
          </div>
          </div>
         
        </section>
    );
}
export default Skills;