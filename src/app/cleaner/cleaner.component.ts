import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.scss']
})
export class CleanerComponent implements OnInit {
  eaForm: FormGroup;
  result: string;
  details: any[];
  JSObject: Object = Object;

  constructor(fb: FormBuilder) {
    this.eaForm = fb.group({
      'req':''
    });
  }

  ngOnInit() {}

  onSubmit(form: FormGroup){
    this.result = this.cleaner(form.value.req);
  }

  cleaner(request): string{
    let tab_request = request.split('?');
    let params = this.sort_params(this.extract_params(tab_request[1]));

    params = this.organize_products(params);
    this.details = params;

    return this.construct_request(tab_request[0], params);
  }

  extract_params(str_params): any{
    let params = str_params.split("&");
    let new_format = [];
    for(let i in params){
      let param_tab = params[i].split('=');
      if(param_tab[0] && param_tab[0].match(/\w+/)) new_format[param_tab[0]] = param_tab[1];
    }
    return new_format;
  }

  sort_params(params: any): any{
    var ordered = {};
    Object.keys(params).sort().forEach(function(key) {
      ordered[key] = params[key];
    });

    return ordered;
  }

  organize_products(params: any): any{
    let products = this.separate_products(params);
    let sort_params = [];

    for(let i in params){
      if(!i.match(/prd/g)){
        sort_params[i] = params[i];
      }
    }
    for(var i = 0; i < products.length; i++){
      sort_params = Object.assign({}, sort_params, products[i]);
    }

    return sort_params;
  }

  separate_products(params: any): any[]{
    let products = [];
    let prdparams = [];
    const prd_regex = /prd([a-z])([0-9])/g;
    const prdparams_regex = /prdp([0-9])([kd])([0-9])/g;


    for(let p in params){
      if(p.match(prd_regex)){
        prd_regex.lastIndex=0;
        var extract = prd_regex.exec(p);
        var i = extract[2];
        var letter = extract[1];

        //new product
        if(typeof products[i] == 'undefined'){
          products[i] = [];
          prdparams[i] = [];
        }

        //separate prdp and others
        if(letter === 'p'){
          prdparams_regex.lastIndex=0;
          var pp_ex = prdparams_regex.exec(p);
          if(pp_ex[2] == 'k'){
            prdparams[i][p] = params[p]; //key
            prdparams[i]['prdp'+pp_ex[1]+'d'+pp_ex[3]] = params['prdp'+pp_ex[1]+'d'+pp_ex[3]];//value
          }
        }else{
          products[i][p] = params[p];
        }
      }
    }

    //fusion
    for(let i in products){
      products[i] = Object.assign({},products[i], prdparams[i]);
    }

    return products;
  }

  construct_request(domain: string, params: any[]): string{
    let array_params = [];
    for(let i in params){
      array_params.push(i+"="+params[i]);
    }

    return domain+'?'+array_params.join('&');
  }

  URI_decode = function(str: string): string {
    return decodeURIComponent(str);
  }

}
