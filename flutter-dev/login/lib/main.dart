import 'package:flutter/material.dart';
import 'package:login/homepage.dart';
import 'package:login/loginpage.dart';

void main() => runApp(App());

class App extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.blue,
      ),
      initialRoute: '/',
      //home: LoginPage(),
      routes: {
        '/' : (context) => LoginPage(),
        '/second' : (context) => HomePage(),
      },
    );
  }
}

class WitsLogo extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    AssetImage assetImage = AssetImage('images/witslogo.png');
    Image image = Image(image: assetImage, width: MediaQuery.of(context).size.width, height: 100.0);
    return Container(child: image,);
  }
}