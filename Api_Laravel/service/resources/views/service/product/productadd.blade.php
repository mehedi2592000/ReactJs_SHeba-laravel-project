@extends('layouts.app')
@section('content')

<br><br>
<form action="{{ route('productadd') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="container">
                <div class="row ">
            <div class="form-group">
                    <input type="text" name="name" placeholder="Name" class="form-control">
                    @error('name')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
             </div>
               <br> <br>
                <div class="form-group">
                    <input type="number" name="price" Placeholder="Price"class="form-control">
                    @error('price')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
    
                <br>
                <div class="form-group">
                    <input type="text" name="message" Placeholder="message"class="form-control">
                    @error('message')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
    

                <br>
                <div class="form-group">
                    <input type="file" name="image" class="form-control">
                    @error('image')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                </div>
     
                <br>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Upload</button>
                </div>
     
            </div>
            </div>
            
        </form>
        
        @endsection