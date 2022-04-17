@component('mail::message')
# Introduction



Welcome to the SHEVE WEB SITE


            THIS IS YOUR LIST
@component('mail::button', ['url' => 'http://localhost:3000/Dashboard'])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
