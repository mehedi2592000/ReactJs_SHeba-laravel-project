<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use App\Models\employee;
use App\Mail\welcomeMail;
use Illuminate\Support\Facades\Mail;
use App\Models\CUser;
use App\Models\Token;
use Illuminate\Support\Str;
use DateTime;
use App\Models\Email;


class LoginController extends Controller
{
    public function logine(){
        return view('service.login.login');
    }
    public function loginSubmit(Request $req){
/*
        $validate=$req->validate([
            
            'username'=>'required|min:3',
            'password'=>'required',          
            
        ],
        [
           
            'username.required'=>'give the username',
            'username.min'=>'minimum 3 digit needed',
            'password.required'=>'give the password'

        ]
                   
    );
*/
        $c = employee::where('username',$req->username)
                  ->where('password',$req->password)->where('status','active')
                  ->first();
        if($c){
        /*
            session()->put('user',$c->id);
            if ($req->remember) {
                setcookie('remember',$req->username, time()+36000);
                Cookie::queue('name',$c->username."welcome to login",time()+60);
            }else{
                setcookie('remember',"");
                Cookie::queue('name',"");
            }
        */
            //return "trueer";
            
            /*Mail::to('bd34017053@gmail.com')->send(new welcomeMail());
            return new welcomeMail();
            */

            $api_token = Str::random(64);
            $token = new token();
            $token->userid = $c->id;
            $token->token_id = $api_token;
            $token->create_at = new DateTime();
            $token->save();
            return $token;
        }
        return "error, again login";

    }
/*
    public function logout(){
        session()->flush();
        return redirect()->route('logine');
    }


    public function home()
    {
        return view('home');
    }
*/

public function logout(){

    

    $token = new token();
    $token->exparied_at = "8/8";
    $token->save();
    
    return "ok";
}
}