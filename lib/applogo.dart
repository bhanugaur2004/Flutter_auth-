import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Image.network("https://imgs.search.brave.com/2i99eciYi7rcZuaRyixM5YgUeMkCn3f6Xkc0WstUwYQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kYW5p/ZWx2b2Vsay5kZS93/cC1jb250ZW50L3Vw/bG9hZHMvaHVtYWFh/bnMtdW5kcmF3LWFs/dGVybmF0aXZlLnBu/Zw", height: 300,),
        "To-Do App".text.xl2.italic.make(),
        "Make A List of your task".text.light.black.wider.lg.make(),
      ],
    );
  }
}