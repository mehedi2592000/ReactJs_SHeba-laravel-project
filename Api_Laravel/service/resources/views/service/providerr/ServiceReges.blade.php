@extends('layouts.app')
@section('content')
<table class="table table-border">
    <tr>
        <th>id</th>
        <th>name</th>
        <th>nid</th>
        <th>email </th>
        <th>phone </th>
        <th>username </th>
        <th>password </th>
        <th>status </th>
        
    </tr>
    @foreach($Servicprovider as $Servicprovider)
    <tr>
        <td>{{$Servicprovider->id}}</td>
        <td>{{$Servicprovider->name}}</td>
        <td>{{$Servicprovider->nid}}</td>
       
        <td>{{$Servicprovider->email}}</td>
        <td>{{$Servicprovider->phone}}</td>
        <td>{{$Servicprovider->username}}</td>
        <td>{{$Servicprovider->password}}</td>
        <td>{{$Servicprovider->status}}</td>
        
        <td><a class="btn btn-success px-3" href="/Servicproviderupdate/{{$Servicprovider->id}}/{{$Servicprovider->name}}">update</a></td>

        <td><a class="btn btn-danger px-3" href="/providerDelete/{{$Servicprovider->id}}/{{$Servicprovider->name}}">Delete</a></td>

</tr>
@endforeach

</table>

@endsection