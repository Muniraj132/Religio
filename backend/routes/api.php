<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ReligioController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\ClientregistrationController;
use App\Http\Controllers\ProjectsController;

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

Route::post('/Register',[RegisterController::class,'Register']);
Route::post('/Login',[RegisterController::class,'Login']);

// Congregation
Route::post('/Religio/Congregation/store',[ReligioController::class, 'Congregation']);
Route::get('/Religio/Congregation',[ReligioController::class, 'CongregationList']);
Route::delete('/Religio/Congregation/{id}',[ReligioController::class, 'CongregationDelete']);
Route::get('/Religio/Congregationedit/{id}',[ReligioController::class, 'CongregationEdit']);
Route::put('/Religio/Congregationupdate/{id}',[ReligioController::class, 'Congregationupdate']);

// Province
Route::post('/Religio/Province/store',[ProvinceController::class, 'Provincestore']);
Route::delete('/Religio/Province/{id}',[ProvinceController::class, 'ProvinceDelete']);
Route::get('/Religio/Province',[ProvinceController::class, 'ProvinceList']);
Route::get('/Religio/Province/Congregation',[ProvinceController::class, 'ProvinceCongregation']);
Route::get('/Religio/Provinceedit/{id}',[ProvinceController::class, 'ProvinceEdit']);
Route::put('/Religio/Provinceupdate/{id}',[ProvinceController::class, 'Provinceupdate']);
Route::get('/Religio/Province/get/{id}',[ProvinceController::class, 'Provinceget']);


// ClientRegisteration
Route::post('/Religio/Clientregistration/store',[ClientregistrationController::class, 'Clientregistrationstore']);
Route::post('/Religio/Clientregistration/uploadfile',[ClientregistrationController::class, 'Clientregistrationuploadfile']);
Route::post('/Religio/Clientregistration/uploadfile/{id}',[ClientregistrationController::class, 'Clientregistrationuploadfileid']);
Route::get('/Religio/Clientregistration',[ClientregistrationController::class, 'ClientregistrationList']);
Route::delete('/Religio/Clientregistration/{id}',[ClientregistrationController::class, 'ClientregistrationDelete']);
Route::get('/Religio/Registeredit/{id}',[ClientregistrationController::class, 'ClientregistrationEdit']);
Route::put('/Religio/Clientregistrationupdate/{id}',[ClientregistrationController::class, 'Clientregistrationupdate']);

// project status
Route::post('/projectstatuscreate', [ProjectsController::class,'projectstatus']);
Route::get('/projectstatus',[ProjectsController::class,'projectlist']);
Route::get('/projectstatusedit/{id}',[ProjectsController::class, 'projectEdit']);
Route::put('/projectstatusupdate/{id}',[ProjectsController::class, 'projectupdate']);
Route::delete('/projectstatusdelete/{id}',[ProjectsController::class, 'projectDelete']);

