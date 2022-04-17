<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProviderController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderdetailController;
use App\Mail\welcomeMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/Servicprovider',[ProviderController::class,'Servicprovider'])->middleware('APIAuth');
//Route::get('/Servicprovider',[ProviderController::class,'Servicprovider']);
Route::get('/invalidServicprovider',[ProviderController::class,'invalidServicprovider']);
Route::post('/addServicprovider',[ProviderController::class,'submitedaddServicprovider']);
Route::post('/Servicproviderupdate/{id}',[ProviderController::class,'submitServicproviderupdate']);
Route::get('/cproviderDelete/{id}',[ProviderController::class,'providerDelete']);

Route::get('/customerlist',[CustomerController::class,'customerlist']);
Route::get('/customerpermissionlist',[CustomerController::class,'customerpermissionlist']);
Route::post('/addcustomer',[CustomerController::class,'submitaddcustomer']);
Route::post('/customerupdate/{id}',[CustomerController::class,'submitcustomerupdate']);
Route::post('/customerupdatepermission/{id}',[CustomerController::class,'permisssionsubmitcustomerupdate']);
Route::get('/customerDelete/{id}',[CustomerController::class,'customerDelete']);

Route::get('/productlist',[ProductController::class,'productlist']);
Route::post('/productadd',[ProductController::class,'productaddsubmit']);
Route::post('/productupdate/{id}',[ProductController::class,'submitemployeeupdate']);
Route::get('/productdelete/{id}',[ProductController::class,'productdelete']);

Route::get('/orderdetaillist',[OrderdetailController::class,'orderdetaillist']);
Route::post('/orderdetailupdate/{id}',[OrderdetailController::class,'submitorderdetailupdateupdate']);
Route::get('/providerDelete/{id}',[OrderdetailController::class,'providerDelete']);

Route::post('/logine',[loginController::class,'loginSubmit']);
Route::get('/logout',[loginController::class,'logout']);

Route::get('/email',function(){
    Mail::to('bd34017053@gmail.com')->send(new welcomeMail());
    return new welcomeMail();
});
