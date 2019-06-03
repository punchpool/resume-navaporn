import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

class Resume extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
          value: [],
          textvalue : "",
          test:""
        }
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handledelTodoItem = this.handledelTodoItem.bind(this)
        this.hobby = [localStorage.getItem('Hobby')];
    }

    handleChange(e) {
      this.setState({
        textvalue:e.target.value
      })
    }
    handleAddTodoItem(event) {
      if( this.hobby[0] !== null){
        this.state.value.push(this.state.textvalue)
        this.hobby.push(this.state.textvalue);
        localStorage.setItem('Hobby',this.hobby);
      }else if(this.hobby[0] === null || this.hobby === undefined || this.hobby[0] === ""){
        localStorage.setItem('Hobby',[])
        this.state.value.push(this.state.textvalue)
        localStorage.setItem('Hobby',this.state.value);
      }
    
      this.setState(
        this.state
      )
      // this.state

      event.preventDefault();
    }
    handledelTodoItem(v,event){
      for(var i = 0; i < this.state.value.length; i++){
        if(this.state.value[i] === v){
           this.state.value.splice(i, 1);
           localStorage.setItem('Hobby',this.state.value);
        }
       
      }
      for(var j = 0; j < this.hobby.length; j++){
        if(this.hobby[j] === v){
          // delete this.hobby[j]
          this.hobby.splice(j, 1);
          localStorage.setItem('Hobby',this.hobby);
        }
      }
      this.setState({
        value:this.state.value
      })
      event.preventDefault();
    }

    render() {
      let { value } = this.state;
      return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-5 pt-5 pb-2 left">
                  <div className="row">
                    <div className="col-4">
                      <img src={require('./images/picprofile.png')} className="picprofile" alt="navapornp"/>
                    </div>
                    <div className="col-8">
                    <h1 className="float-right text-uppercase title-big font-italic mt-4 lineyellow">Navaporn<br/> Poolchan</h1>
                    </div>
                  </div>
                  <div className="contactme"> 
                    <div className="row mt-4 align-items-center">
                      <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                      <h4 className="text-uppercase title mt-2">Contact Me </h4>
                      <span className="lineblack long"></span>
                    </div>
                    <div className="row justify-content-md-center">
                      <div className="col-7">
                        <p>78 soi Jarunsanitwong 59, 
                        Bangbumru, Bangphat,
                        Bangkok Thailand 10700</p>
                        <p>TEL: 086-540-4341 <br/>(If You Cannot Contact by phone, Please Contact Me Via E-Mail)</p>
                        <p>E-MAIL: punch.pool@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="Education"> 
                    <div className="row mt-4 align-items-center">
                      <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                      <h4 className="text-uppercase title mt-2">Education </h4>
                    </div>
                    <div className="row justify-content-md-center mt-4">
                      <div className="col-10">
                         <span className="line-verticle black"></span>

                        <div className="row"> 
                          <p className="col-4">2011-2015</p>
                          <span className="lineblack shot first"></span>
                          <p className="col-8 text-right detail"><span className="ml-4 h6">Mahidol University<br/></span>
                            <span className="font-11px">Major Multimedia<br/><br/></span>
                            <span className="font-12px">
                            Faculty of Information and<br/>
                            Communication - Technology<br/>
                            Nakhon Pathom, Thailand<br/></span>
                          </p>
                        </div>
                        <div className="row mt-3"> 
                          <p className="col-4">2011</p>
                          <span className="lineblack shot second"></span>
                          <p className="col-8 text-right detail"><span className="ml-4 h6">High School Diploma<br/></span>
                          <span className="font-11px">Science/Math<br/><br/></span>
                          <span className="font-12px">
                            ST. Francis Xavier Convent School<br/>
                            Bangkok, Thailand<br/></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-7 pt-4 pb-2 right"> 
                <div className="contactme mb-5"> 
                    <div className="row mt-3 align-items-center">
                      <span className="line-verticle white h-90px left mt-3"></span>
                      <div className="col-5">
                        <div className="row">
                          <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                          <h4 className="text-uppercase title mt-2">Award </h4>
                        </div>
                      </div>
                      <div className="col-7 pt-5 font-italic">
                        <p>NATIONAL SOFTWARE CONTEST 2015<br/>
                        Received Honorabol Mention Award<br/>
                        NSC 2015, NECTEC, Thailand</p>
                      </div>
                    </div>
                  </div>
                  <div className="workshop mb-5"> 
                    <div className="row mt-4 align-items-center">
                      <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                      <h4 className="text-uppercase title mt-2">WORKSHOP/TRAINING </h4>
                    </div>
                    <div className="row mt-4">
                      <span className="line-verticle white h-230px center"></span>
                      <div className="col-6 align-self-end">
                        <div className="row mt-5 offset-md-3">
                          <p className="text-right detail"><span className="ml-4 h5">Web advance<br/>designer</span><br/>
                          @ NET DESIGN</p>
                          <span className="linewhite shot first mt-4"></span>
                        </div>
                        <div className="row mt-5">
                          <p className="text-right ml-4 detail"><span className="ml-4 h5">VISUAL<br/>
                          COMMUNICATION ART<br/></span>
                          @ JAMMER STUDIO</p>
                          <span className="linewhite shot third mt-4"></span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row mt-2 ml-3">
                          <p className="text-left ml-5 pl-1 detail"><span className="h5">ux advance course</span><br/>
                            @ ux academy</p>
                          <span className="linewhite shot four mt-2"></span>
                        </div>
                        <div className="row mt-5 ml-3">
                          <p className="text-left ml-5 pl-5 detail"><span className="h5">graphic advance<br/>
                            designer<br/></span>
                            @ NET DESIGN</p>
                          <span className="linewhite shot second mt-2"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="languageskill mb-5"> 
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 mb-3">
                        <div className="row">
                          <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                          <h4 className="text-uppercase title mt-2">LANGUAGE SKILL </h4>
                        </div>
                      </div>
                      <div className="col-10 justify-content-left pt-4">
                        <div className="row">
                          <p className="title-tube">ENGLISH</p>
                          <div className="rectangle-tube ml-3">
                              <div className="bg-120px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profressionalskill">
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 mb-3">
                        <div className="row">
                          <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                          <h4 className="text-uppercase title mt-2">PROFESSIONAL SKILL</h4>
                        </div>
                      </div>
                      <div className="col-10 pt-4">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <p className="title-tube text-right">PHOTOSHOP</p>
                              <div className="rectangle-tube ml-3">
                                  <div className="bg-135px"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <p className="title-tube">ILLUSTRATOR</p>
                              <div className="rectangle-tube ml-3">
                                  <div className="bg-120px"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className="col-12 content2 right py-5">
                  <div className="container mt-3">
                    <div className="row comskill">
                      <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                      <h4 className="text-uppercase title mt-2">COMPUTER LANGUAGE</h4>
                    </div>
                    <div className="row comskill pt-4">
                        <div className="col-4">
                          <div className="row my-3">
                            <p className="title-tube col-5">HTML</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-155px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">CSS</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-155px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">SASS</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-155px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">JAVASCRIPT</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-120px"></div>
                            </div>
                          </div>
                          <div className="row">
                            <p className="title-tube col-5">JENKINs</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-120px"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row my-3">
                            <p className="title-tube col-5">PHP</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-90px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">WORDPRESS</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-90px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">ANGULAR 5-6</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-145px"></div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <p className="title-tube col-5">TYPESCRIPT <span className="font-11px">(.TS)</span></p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-135px"></div>
                            </div>
                          </div>
                          <div className="row">
                            <p className="title-tube col-5">UNIT TEST <span className="font-11px">(ANGULAR)</span></p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-120px"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row my-3">
                            <p className="title-tube col-5">BOOTSTRAP</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-155px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">LARAVEL</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-90px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">PREPOS</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-145px"></div>
                            </div>
                          </div>
                          <div className="row my-3">
                            <p className="title-tube col-5">UX</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-135px"></div>
                            </div>
                          </div>
                          <div className="row">
                            <p className="title-tube col-5">GIT</p>
                            <div className="rectangle-tube ml-3">
                                <div className="bg-135px"></div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="row workexandobjtive pt-4">
                      <div className="col-7 workex">
                          <div className="row">
                              <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                              <h4 className="text-uppercase title mt-2">WORK EXPERIRENCE</h4>
                          </div>
                          <div className="row mt-4">
                            <span className="line-verticle white h-230px center"></span>
                            <div className="col-6">
                              <div className="row offset-md-2">
                                <p className="text-right detail">
                                <span className="ml-4 h5 pb-3">2015 <br/><br/></span>
                                @ ITOS CONSULTING CO.,LTD<br/>
                                4 MONTHS<br/>
                                POSITION: WEB DESIGN<br/>
                                        & GRAPHIC DESIGN</p>
                                <span className="linewhite shot five mt-2"></span>
                              </div>
                              <div className="row mt-5">
                                <p className="text-right col-11 detail"><span className="ml-3 h5">2018-2019<br/><br/></span>
                                @AIS (Advanced Info Service)<br/>
                                (Contactor at<br/>
                                Hitachi Consulting Ltd.)<br/>
                                1 YEAR AND 1 MONTH<br/></p>
                                <p className="text-right col-11 detail">
                                POSITION<br/>
                                  2018-2019 - FRONT-END DEVELOPER</p>
                                <span className="linewhite shot seven mt-2"></span>
                              </div>
                          </div>
                            <div className="col-6">
                              <div className="row mt-5 ml-3">
                                <p className="text-left ml-5 pl-1 detail"><span className="h5">2015 -2018</span><br/><br/>
                                @ RABBIT DIGITAL GROUP<br/>
                                (RABBIT’S TALE AGENCY)<br/>
                                2 YEARS AND 2 MONTHS<br/><br/>

                                POSITION<br/>
                                2015-2017 - FRONT-END DEVELOPER<br/>
                                2018 - FULL STRACK DEVELOPER<br/>
                                      @ CODE & CRAFT</p>
                                <span className="linewhite shot six mt-2"></span>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="col-5 objective">
                        <div className="row">
                          <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                          <h4 className="text-uppercase title mt-2">OBJECTIVE</h4>
                        </div>
                        <div className="row">
                          <div className="offset-md-3">
                            <p className="detail">
                            LEARN THE NEW THINGS<br/>
                            AND NEW EXPERIENCES TO IMPROVE<br/>
                            MYSELF TO BE MORE PROFESSIONAL<br/>
                            AND GOOD RELATIONS WITH TEAMS<br/><br/>
                            POSITION: FRONT-END DEVELOPER
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row testReactonlocal pt-4">
                      <img src={require('./images/rectangle.png')} className="rectang ml-5" alt="rectangle"/>
                      <h4 className="text-uppercase title mt-2">HOBBY</h4><br/>
                      <p className="col-9 offset-md-1">(Test - Add Data On localStorage)</p>
                      <div className="col-10 offset-md-1 my-3">
                        <div className="row">
                          <p className="col-12 detail"> {this.hobby}</p>
                          <div className="col-6 pt-5">
                            <p>NEW HOBBY:</p>   
                                  {value.map((hobby) => {
                                  return <p key={hobby.toString()}>{hobby}<button className="ml-4 btn  btn-warning" onClick={this.handledelTodoItem.bind(this,hobby)}>Delete</button></p>
                                })}
                          </div>
                      
                          <div className="col-6"> 
                            <form className="pt-5">
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" placeholder="Add Hobby" onChange={this.handleChange}  />
                                  <div className="input-group-append">
                                    <button className="btn  btn-warning" type="submit" value="Submit"  onClick={this.handleAddTodoItem}>Save</button>
                                  </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
      <Resume name="punch"/>,
      document.getElementById('root')
  );