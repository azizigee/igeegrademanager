import React from 'react'
import { StrictMode } from 'react/cjs/react.production.min'

const Deliberationrow1 = ({grade,index}) => {
    
const MoyEE171 = (grade.grades1.EE171.control * 0.4 + grade.grades1.EE171.exam*0.6)
const MoyEE173 = (grade.grades1.EE173.control * 0.4 + grade.grades1.EE173.exam*0.6)
const MoyEE175 = (grade.grades1.EE175.control * 0.4 + grade.grades1.EE175.exam*0.6)
const MoyUEF11 = (MoyEE171 + MoyEE173 + MoyEE175)/3 
const CrUEF11 = ()=> { var credit = 0
                     if(MoyUEF11>=10.0) credit = 15 
                     else {if(MoyEE171>=10.0) credit = credit+5 
                           if(MoyEE173>=10.0) credit = credit+5
                           if(MoyEE175>=10.0) credit = credit+5 }
                     return credit}
//---------------------------------------
const MoyEE175L = grade.grades1.EE175L.grade
const MoyUEM11 = MoyEE175L
const CrUEM11 = ()=> { var credit = 0
                     if(MoyUEM11>=10.0) credit = 1 
                     return credit}
//---------------------------------------
const MoyEL103 = (grade.grades1.EL103.control * 0.4 + grade.grades1.EL103.exam*0.6)
const MoyEE121 = (grade.grades1.EE121.control * 0.4 + grade.grades1.EE121.exam*0.6)
const MoyUET11 = (MoyEL103*8 + MoyEE121*1 )/9
const CrUET11 = ()=> { var credit = 0
                     if(MoyUET11>=10.0) credit = 14 
                     else {if(MoyEL103>=10.0) credit = credit+12 
                           if(MoyEE121>=10.0) credit = credit+2
                            }
                     return credit}
//--------------------------------------
const Moysem1= (MoyUEF11*9+MoyUEM11+MoyUET11*9)/19
const Crsem1= CrUEF11()+CrUEM11()+CrUET11()
//--------------------------------------

const MoyEE172 = (grade.grades1.EE172.control * 0.4 + grade.grades1.EE172.exam*0.6)
const MoyEE174 = (grade.grades1.EE174.control * 0.4 + grade.grades1.EE174.exam*0.6)
const MoyEE176 = (grade.grades1.EE176.control * 0.4 + grade.grades1.EE176.exam*0.6)
const MoyEE178 = (grade.grades1.EE178.control * 0.4 + grade.grades1.EE178.exam*0.6)
const MoyUEF21 = (MoyEE172 * 2 + MoyEE174 * 3 + MoyEE176 * 2 + MoyEE178 * 3)/10 
const CrUEF21 = ()=> { var credit = 0
                     if(MoyUEF21>=10.0) credit = 20
                     else {if(MoyEE172>=10.0) credit = credit+4 
                           if(MoyEE174>=10.0) credit = credit+6
                           if(MoyEE176>=10.0) credit = credit+4
                           if(MoyEE178>=10.0) credit = credit+6 }
                     return credit}
//---------------------------------------
const MoyEE122 = (grade.grades1.EE122.control * 0.4 + grade.grades1.EE122.exam*0.6)
const MoyEE178L = grade.grades1.EE178L.grade
const MoyUEM21 = (MoyEE122 * 2 + MoyEE178L)/3
const CrUEM21 = ()=> { var credit = 0
                     if(MoyUEM21>=10.0) credit = 4
                     else {if(MoyEE122>=10.0) credit = credit+3 
                           if(MoyEE178L>=10.0) credit = credit+1
                                                                }
                     return credit}
//---------------------------------------
const MoyEL104 = (grade.grades1.EL104.control * 0.4 + grade.grades1.EL104.exam*0.6)
const MoyUET21 = MoyEL104
const CrUET21 = ()=> { var credit = 0
                     if(MoyUET21>=10.0) credit = 3
                    
                     return credit}
//---------------------------------------
const MoyEE102 = (grade.grades1.EE102.control * 0.4 + grade.grades1.EE102.exam*0.6)
const MoyUED21 = MoyEE102
const CrUED21 = ()=> { var credit = 0
                     if(MoyUED21>=10.0) credit = 3
                    
                     return credit}
//---------------------------------------
const Moysem2 = (MoyUEF21*10+MoyUEM21*3+MoyUET21*2+MoyUED21*2)/17
const Crsem2 = CrUEF21()+CrUEM21()+CrUET21()+CrUED21()
//---------------------------------------
const MoyL1 = (Moysem1 * 19+Moysem2 * 17)/36
const decision =  ()=>{if(MoyL1>=10.0) return "Admis"
                       else return "Rattrapage"}
const decider = decision()


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
            <td>{MoyUEM11.toFixed(2)}</td>
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
            <td>{MoyUET21.toFixed(2)}</td>
            <td>{MoyEE102.toFixed(2)}</td>
            <td>{MoyUED21.toFixed(2)}</td>
            <td>{Moysem2.toFixed(2)}</td>
            <td>{Crsem2}</td>
            <td>{MoyL1.toFixed(2)}</td>
            <td>{Crsem1+Crsem2}</td>
            <td>{ decider}</td>



        </tr>
    )
}

export default Deliberationrow1

