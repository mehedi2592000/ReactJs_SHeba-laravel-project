<?php

namespace App\Http\Controllers;

use App\Models\customer;
use App\Http\Requests\StorecustomerRequest;
use App\Http\Requests\UpdatecustomerRequest;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecustomerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecustomerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecustomerRequest  $request
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecustomerRequest $request, customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(customer $customer)
    {
        //
    }
    public function customerlist(Request $request)
    {
        $searche=$request['search'] ?? "";
        if($searche!= ""){
            $customerlist=customer::all()->where('id',$searche);
            
        }
        else
        {

        $customerlist=customer::all();
        }
       // return view('service.customerr.customerlist')->with('customerlist',$customerlist);

       return $customerlist;
    }
    

    public function customerpermissionlist()
    {
         $customerlist=customer::all();
        // return view('service.customerr.customerpermissionlist')->with('customerlist',$customerlist);

        return $customerlist;
         
    }

    public function addcustomer()
    {
        return view('service.customerr.addcustomer');
    }
    

    public function submitaddcustomer(Request $request)
    {
        /*
        $validate=$request->validate([
            'name'=>'required|min:3',
            
            'phone'=>'required|min:11|regex:/^([0-9\s\-\+\(\)]*)$/|max:11',
            'email'=>'email',
            'username'=>'required|min:3',
            'password'=>'required',

            
            
        ],
        [
            'name.required'=>'please name correctlay',
            'name.min'=>'3 chak must be',
            'phone.required'=>'please give the phone number',
            'phone.min'=>'atleast 11 digit needed',
            'phone.max'=>'maximum 11 digit needed',
            'phone.regex'=>'give the valid phone number',
            'username.required'=>'give the username',
            'username.min'=>'minimum 3 digit needed',
            'password.required'=>'give the password'

        ]
        
        
            
    );
    */
            $provider=new customer();
            $provider->name=$request->name;
            
            $provider->phone=$request->phone;

            $provider->email=$request->email;
            $provider->username=$request->username;
            $provider->password=$request->password;
            $provider->status='active';
            $provider->save();

            return $provider;

        return "ok";
       
    }

    public function customerupdate(Request $request)
    {
        $customer=customer::where('id', $request->id)->first();

    return view('service.customerr.customerupdate')->with('customer',$customer);
    }   

    public function submitcustomerupdate(Request $request)
    {
        
        $provider=customer::where('id', $request->id)->first();
            $provider->name=$request->name;
            
            $provider->phone=$request->phone;

            $provider->email=$request->email;
            $provider->username=$request->username;
            $provider->password=$request->password;
            $provider->status=$request->status;
            $provider->save();

        //return redirect()->route('customerlist');

        return "update data";

    }

    

    public function customerupdatepermission(Request $request)
    {
        $customer=customer::where('id', $request->id)->first();

    return view('service.customerr.customerupdatepermission')->with('customer',$customer);
    }   

    public function permisssionsubmitcustomerupdate(Request $request)
    {
        
        $provider=customer::where('id', $request->id)->first();
            $provider->name=$request->name;
            
            $provider->phone=$request->phone;

            $provider->email=$request->email;
            $provider->username=$request->username;
            $provider->password=$request->password;
            $provider->status=$request->status;
            $provider->save();

        //return redirect()->route('customerpermissionlist');
        return "change  is done";

    }


    public function customerDelete(Request $request){
        $provider=customer::where('id', $request->id)->first();
        $provider->delete();

        return "ok";

    }

}
