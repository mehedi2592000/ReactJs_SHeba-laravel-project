

<form action="{{ route('productupdate') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="container">
                <div class="row ">
            <div class="form-group">
                    <input type="text"  name="name" value="{{$customer->name}}" placeholder="Name" class="form-control">
                </div>
                <br>
                <div class="form-group">
                    <input type="number" name="price" value="{{$customer->price}}" Placeholder="Price"class="form-control">
                </div>
    
                <br>
                <div class="form-group">
                    <input type="text" name="message"value="{{$customer->message}}" Placeholder="Price"class="form-control">
                </div>
    

                <br>
                <div class="form-group">
                    <input type="file" name="image" value="{{$customer->immage}}"class="form-control">
                </div>
     
                <br>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Upload</button>
                </div>
     
            </div>
            </div>
            
        </form>
        
