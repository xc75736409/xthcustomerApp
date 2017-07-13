import {Pages} from "./Pages";
/**
 * Created by xc on 17-7-10.
 */

export class CustomersParas extends Pages{
  id:string;
  name:string;
  sex:string;
  phone:string;
  company:string;
  bcreatetime:string;
  ecreatetime:string;
}

export class ConsumeParas extends Pages{
  customerId:string;
}


export class StatisteParas extends  Pages{
  bcreatetime:string;
  ecreatetime:string;
  groupType:string='1';
}
