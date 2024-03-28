let basic = parseFloat(prompt("Enter basic Salary : "));//gets input from the user, and assigns the value to the variable basic as a float type
let benefits = parseFloat(prompt("Enter cumulative benefits :"));//gets benefits from the user
netSalaryCalculator(basic, benefits);//invokes the function netSalaryCalculator after inputs are received 
function grossSalary(basic,benefits){//calculates the gross Salary
    return basic+benefits;
}
function payeeCalc(basic, benefits){//function calculates the PAYE, takes basic salary and benefits as parameters.
    let payee;//variable to hold the PAYE monthly tax before personal relief deductions
    let personalBenefits= 2400;//personal deduction is declared
    let monthlyTaxablePay = basic-benefits;//basic salary less benefits gives the monthly taxable pay
    /*the following conditions checks tha monthly taxable pay and calculates the payee based on the Kenya Revenue Authority formular*/
    if (monthlyTaxablePay>=1 && monthlyTaxablePay<=24000){
      let payee = (monthlyTaxablePay*0.1)-personalBenefits;
      
      if (payee<=0){//for all the monthly taxable pay less or equal to 24000, no payee is deducted
        return 0;
      }

    }else if (monthlyTaxablePay>=24001 && monthlyTaxablePay<=32333){
        payee =(24000*0.1)+((monthlyTaxablePay-24000)*0.25);
        return payee-personalBenefits;//personal benefits is subracted from payee
    }else if (monthlyTaxablePay>=32334 && monthlyTaxablePay<=500000){
        payee = (24000*0.1)+((32334-24000)*0.25)+((monthlyTaxablePay-32334)*0.3);
        return payee-personalBenefits;//personal benefits is subracted from payee
    }else if (monthlyTaxablePay>=500001 && monthlyTaxablePay<=800000){
        payee = (24000*0.1)+((32334-24000)*0.25)+((500000-32334)*0.3)+((monthlyTaxablePay-500001)*0.325);
        return payee-personalBenefits;//personal benefits is subracted from payee
    }else{ if (monthlyTaxablePay>=800001){
        payee= (24000*0.1)+((32334-24000)*0.25)+((500000-32334)*0.3)+((800000-500001)*0.325)+((monthlyTaxablePay-800001)*0.35);
        return payee-personalBenefits;//personal benefits is subracted from payee
    }else{
        console.log("Not Valid Basic Salary or Benefits");
    }

  }
}
 function nhifDedcutions(basic, benefits){//calculates the nhif deductions based on the NHIF dedecutions formular
        grossSalary();//reads the output from the function grossSalary
        if (grossSalary<=5999){
            return 150;
        }else if(grossSalary>=6000 && grossSalary<=7999 ){
            return 300;
        }else if(grossSalary>=8000 && grossSalary<=11999 ){
            return 400;
        }else if(grossSalary>=12000 && grossSalary<=14999 ){
            return 500;
        }else if(grossSalary>=15000 && grossSalary<=19999 ){
            return 600;
        }else if(grossSalary>=20000 && grossSalary<=24999 ){
            return 750;
        }else if(grossSalary>=25000 && grossSalary<=29999 ){
            return 850;
        }else if(grossSalary>=30000 && grossSalary<=34999 ){
            return 900;
        }else if(grossSalary>=35000 && grossSalary<=39999 ){
            return 950;
        }else if(grossSalary>=40000 && grossSalary<=44999 ){
            return 1000;
        }else if(grossSalary>=45000 && grossSalary<=49999 ){
            return 1100;
        }else if(grossSalary>=50000 && grossSalary<=59999 ){
            return 1200;
        }else if(grossSalary>=60000 && grossSalary<=69999 ){
            return 1300;
        }else if(grossSalary>=70000 && grossSalary<=79999 ){
            return 1400;
        }else if(grossSalary>=80000 && grossSalary<=89999 ){
            return 1500;
        }else if(grossSalary>=90000 && grossSalary<=99999 ){
            return 1600;
        }else{
            return 1700;
        }    
       }
function NSSF(tier='tier 1'){ //calculates the NSSF deductions, and sets the default tier to tier 1
    if(tier==='tier 1'){
        return 7000*0.06
    }else{

    }
}
function netSalaryCalculator(basic, benefits){//function takes basic salary and benefits as inputs and calculates the net salary
const result1 = payeeCalc(basic,benefits)//calls payee calculator, invokes it and assigns its return value to variable result1
const result2 = nhifDedcutions(basic, benefits);//calls nhifDedcutions, invokes it and assigns the returned value to variable result2
const result3 = NSSF();//NSSF function is invoked the result is assigned to variable result3
const grossSal = grossSalary(basic,benefits);//calls grossSalary function and invokes it, then assigns the returned value to a variable grossSal )
const Netsalary= grossSal-(result1+result2+result3);//calculates net salary by subtracting the summation of payee,NHIF and NSSF and subracting the result from gross salary.
  return `Net Salary is: ${Netsalary}`;
}