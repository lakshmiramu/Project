import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Table,TableCell,TableRow } from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import TableDetails from './TableDetails';
import SliderMarks from './SliderMarks';
const PrettoSlider =withStyles({
    root:{color:'black', height:10},
    thumb: {height:25, width:25,backgroundColor:'white',border:'3px solid black',marginTop:-9,marginLeft:-9},
    track:{height: 10, borderRadius:4},
    rail:{height:10,borderRadius:4},
  })(Slider);
  //slider set the range of values along bar
  function EmiCalculator() {
    const[pAmount,setAmount]=useState(2755000);
    const[interest,setinterest]=useState(7);
    const[duration,setDuration]=useState(147);
    const maxValue =6000000;
    const intMax=20;
    const maxDuration=360;
  
    const intr = interest/1200;
    const emi = duration ? Math.round(pAmount * intr / (1- (Math.pow(1/(1+ intr),duration)))): 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi/intr) * (1-Math.pow((1+intr),(-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);
    return(
        <div className="Appemi">
        <div className="CalApp">
          <h2 className="CalHeading"><u>EMI Calculator</u></h2>
          <div>
            {/*  Typography creates a style element and inserts the generated CSS for your theme */}
            {/* PrettoSlider changes values according to range */}
            <Typography gutterBottom><strong>Loan Amount</strong></Typography>
            <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt}   onChange={(event,vAmt) => {setAmount(vAmt);}} defaultValue={pAmount} max={maxValue}/>
          </div>
          <div>
            <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
            <PrettoSlider value={interest} marks={SliderMarks.marksInt} onChange={(event,vInt) => {setinterest(vInt);}} max={intMax} defaultValue={interest} />
          </div>
          <div>
            <Typography gutterBottom><strong>Tenure (month)</strong></Typography>
            <PrettoSlider value={duration} marks={SliderMarks.marksTenure} onChange={(event,vDur) => {setDuration(vDur);}} max={maxDuration}defaultValue={duration}/>
          </div>
          <div>
              <Table>
                  <TableRow>
                      <TableCell>
                      <TableDetails pAmount={pAmount} totalAmt={totalAmt}interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
                      </TableCell>
                      <TableCell>
                        <Pie
                        data={{
                          labels:['Total Interest','Total Amount'],
                          datasets:[{
                            data:[TotalAmountOfInterest,pAmount],
                            backgroundColor:['yellow','green'],
                            options:[{maintainAspectRatio:false}]
                          }]
                        }}
                        width={"2%"}
                        height={"2%"}
                        />
                      </TableCell>
                  </TableRow>
              </Table>
          </div>
        </div>
        </div>
        );
    }
export default EmiCalculator;