import React from 'react'
import { StrictMode } from 'react/cjs/react.production.min'

const Deliberationrow1 = ({grade,index}) => {
    
var MoyEE171 = (grade.grades1.EE171.control * 0.4 + grade.grades1.EE171.exam*0.6)
var MoyEE173 = (grade.grades1.EE173.control * 0.4 + grade.grades1.EE173.exam*0.6)
var MoyEE175 = (grade.grades1.EE175.control * 0.4 + grade.grades1.EE175.exam*0.6)
var MoyUEF11 = (MoyEE171 + MoyEE173 + MoyEE175)/3 
var CrUEF11 =0


//---------------------------------------
var MoyEE175L = grade.grades1.EE175L.grade
var MoyUEM11 = MoyEE175L
var CrUEM11=0 

//---------------------------------------
var MoyEL103 = (grade.grades1.EL103.control * 0.4 + grade.grades1.EL103.exam*0.6)
var MoyEE121 = (grade.grades1.EE121.control * 0.4 + grade.grades1.EE121.exam*0.6)
var MoyUET11 = (MoyEL103*8 + MoyEE121*1 )/9
var CrUET11 =0                
//--------------------------------------
var Moysem1= (MoyUEF11*9+MoyUEM11+MoyUET11*9)/19
//--------------------------------------

var MoyEE172 = (grade.grades1.EE172.control * 0.4 + grade.grades1.EE172.exam*0.6)
var MoyEE174 = (grade.grades1.EE174.control * 0.4 + grade.grades1.EE174.exam*0.6)
var MoyEE176 = (grade.grades1.EE176.control * 0.4 + grade.grades1.EE176.exam*0.6)
var MoyEE178 = (grade.grades1.EE178.control * 0.4 + grade.grades1.EE178.exam*0.6)
var MoyUEF21 = (MoyEE172 * 2 + MoyEE174 * 3 + MoyEE176 * 2 + MoyEE178 * 3)/10 
var CrUEF21 = 0
                    
//---------------------------------------
var MoyEE122 = (grade.grades1.EE122.control * 0.4 + grade.grades1.EE122.exam*0.6)
var MoyEE178L = grade.grades1.EE178L.grade
var MoyUEM21 = (MoyEE122 * 2 + MoyEE178L)/3
var CrUEM21 =  0
           
//---------------------------------------
var MoyEL104 = (grade.grades1.EL104.control * 0.4 + grade.grades1.EL104.exam*0.6)
var MoyUET21 = MoyEL104
var CrUET21 = 0
                     
                    
                    
//---------------------------------------
var MoyEE102 = (grade.grades1.EE102.control * 0.4 + grade.grades1.EE102.exam*0.6)
var MoyUED21 = MoyEE102
var CrUED21 = 0
                               
//---------------------------------------
var Moysem2 = (MoyUEF21*10+MoyUEM21*3+MoyUET21*2+MoyUED21*2)/17
var MoyL1 = (Moysem1 * 19+Moysem2 * 17)/36

//----------------------------------------------------------------------------------------------------------------------S I check for makeUp

if (MoyL1<10.0 && Moysem1<10.0){
    if(grade.grades1.EE171.exam<grade.grades1.EE171.makeup) MoyEE171 = (grade.grades1.EE171.control * 0.4 + grade.grades1.EE171.makeup*0.6)
    if(grade.grades1.EE173.exam<grade.grades1.EE173.makeup) MoyEE173 = (grade.grades1.EE173.control * 0.4 + grade.grades1.EE173.makeup*0.6)
    if(grade.grades1.EE175.exam<grade.grades1.EE175.makeup) MoyEE175 = (grade.grades1.EE175.control * 0.4 + grade.grades1.EE175.makeup*0.6)
 MoyUEF11 = (MoyEE171 + MoyEE173 + MoyEE175)/3 

//---------------------------------------
    if(grade.grades1.EL103.exam<grade.grades1.EL103.makeup) MoyEL103 = (grade.grades1.EL103.control * 0.4 + grade.grades1.EL103.makeup*0.6)
    if(grade.grades1.EE121.exam<grade.grades1.EE121.makeup) MoyEE121 = (grade.grades1.EE121.control * 0.4 + grade.grades1.EE121.makeup*0.6)
 MoyUET11 = (MoyEL103*8 + MoyEE121*1 )/9

//--------------------------------------
 Moysem1= (MoyUEF11*9+MoyUEM11+MoyUET11*9)/19
 MoyL1 = (Moysem1 * 19+Moysem2 * 17)/36
}
//------------------------------------------------------------------------------------S II check for makeup
if (MoyL1<10.0){
    if(grade.grades1.EE172.exam<grade.grades1.EE172.makeup) MoyEE172 = (grade.grades1.EE172.control * 0.4 + grade.grades1.EE172.makeup*0.6)
    if(grade.grades1.EE174.exam<grade.grades1.EE174.makeup) MoyEE174 = (grade.grades1.EE174.control * 0.4 + grade.grades1.EE174.makeup*0.6)
    if(grade.grades1.EE176.exam<grade.grades1.EE176.makeup) MoyEE176 = (grade.grades1.EE176.control * 0.4 + grade.grades1.EE176.makeup*0.6)
    if(grade.grades1.EE178.exam<grade.grades1.EE178.makeup) MoyEE178 = (grade.grades1.EE178.control * 0.4 + grade.grades1.EE178.makeup*0.6)
var MoyUEF21 = (MoyEE172 * 2 + MoyEE174 * 3 + MoyEE176 * 2 + MoyEE178 * 3)/10 

//---------------------------------------
if(grade.grades1.EE122.exam<grade.grades1.EE122.makeup) MoyEE122 = (grade.grades1.EE122.control * 0.4 + grade.grades1.EE122.makeup*0.6)
var MoyUEM21 = (MoyEE122 * 2 + MoyEE178L)/3

//---------------------------------------
if(grade.grades1.EL104.exam<grade.grades1.EL104.makeup) MoyEL104 = (grade.grades1.EL104.control * 0.4 + grade.grades1.EL104.makeup*0.6)
var MoyUET21 = MoyEL104

//---------------------------------------
if(grade.grades1.EE102.exam<grade.grades1.EE102.makeup) MoyEE102 = (grade.grades1.EE102.control * 0.4 + grade.grades1.EE102.makeup*0.6)
var MoyUED21 = MoyEE102

//---------------------------------------
var Moysem2 = (MoyUEF21*10+MoyUEM21*3+MoyUET21*2+MoyUED21*2)/17

}
//----------------------------------------credits calculations-------------
if(MoyUEF11>=10.0)CrUEF11 = 15
else {if(MoyEE171>=10.0) CrUEF11 = CrUEF11+5 
    if(MoyEE173>=10.0) CrUEF11 = CrUEF11+5
    if(MoyEE175>=10.0) CrUEF11 = CrUEF11+5 }

if(MoyUEM11>=10.0)CrUEM11=1

if(MoyUET11>=10.0) CrUET11 = 14 
else {if(MoyEL103>=10.0) CrUET11 = CrUET11+12 
      if(MoyEE121>=10.0) CrUET11 = CrUET11+2
           }

if(MoyUEF21>=10.0) CrUEF21 = 20
else {if(MoyEE172>=10.0) CrUEF21 = CrUEF21+4 
      if(MoyEE174>=10.0) CrUEF21 = CrUEF21+6
      if(MoyEE176>=10.0) CrUEF21 = CrUEF21+4
      if(MoyEE178>=10.0) CrUEF21 = CrUEF21+6 }

if(MoyUEM21>=10.0) CrUEM21 = 4
else {if(MoyEE122>=10.0) CrUEM21 = CrUEM21+3 
      if(MoyEE178L>=10.0) CrUEM21 = CrUEM21+1}

if(MoyUET21>=10.0) CrUET21 = 3

if(MoyUED21>=10.0) CrUED21 = 3

const Crsem1= CrUEF11+CrUEM11+CrUET11

const Crsem2 = CrUEF21+CrUEM21+CrUET21+CrUED21

var CrL1 = Crsem1 + Crsem2 
if(MoyL1>=10.0) CrL1 = 60


//------------------------------------------------------------------------------------
var decision = "Admis"

if(CrL1>=30 && CrL1<60) decision = "Admis avec Dette"
if(CrL1<30) decision = "Ajourné"



    return (
        <tr>
            <td>{index+1}</td>
            <td>{grade.rnumber}</td>
            <td>{grade.fname}</td>
            <td>{grade.lname}</td>
            <td>{grade.group}</td>
            <td>{MoyEE171.toFixed(2)}</td> 
            <td>{MoyEE173.toFixed(2)}</td>
            <td>{MoyEE175.toFixed(2)}</td>
            <td>{MoyUEF11.toFixed(2)}</td>
            <td>{MoyEE175L.toFixed(2)}</td>
            {/* <td>{MoyUEM11.toFixed(2)}</td> */}
            <td>{MoyEL103.toFixed(2)}</td>
            <td>{MoyEE121.toFixed(2)}</td>
            <td>{MoyUET11.toFixed(2)}</td>
            <td>{Moysem1.toFixed(2)}</td>
            <td>{Crsem1}</td>
            <td>{MoyEE172.toFixed(2)}</td>
            <td>{MoyEE174.toFixed(2)}</td>
            <td>{MoyEE176.toFixed(2)}</td>
            <td>{MoyEE178.toFixed(2)}</td>
            <td>{MoyUEF21.toFixed(2)}</td>
            <td>{MoyEE122.toFixed(2)}</td>
            <td>{MoyEE178L.toFixed(2)}</td>
            <td>{MoyUEM21.toFixed(2)}</td>
            <td>{MoyEL104.toFixed(2)}</td>
            {/* <td>{MoyUET21.toFixed(2)}</td> */}
            <td>{MoyEE102.toFixed(2)}</td>
            {/* <td>{MoyUED21.toFixed(2)}</td> */}
            <td>{Moysem2.toFixed(2)}</td>
            <td>{Crsem2}</td>
            <td>{MoyL1.toFixed(2)}</td>
            <td>{CrL1}</td>
            <td style={{fontSize:10}}>{ decision }</td>



        </tr>
    )
}

export default Deliberationrow1

