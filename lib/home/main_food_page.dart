import 'package:flutter/material.dart';
import 'package:food/home/food_page_body.dart';

import '../utils/colors.dart';
import '../widgets/big_text.dart';
import '../widgets/small_text.dart';

class MainFoodPage extends StatefulWidget {
  const MainFoodPage({Key? key}) : super(key: key);

  @override
  State<MainFoodPage> createState() => _MainFoodPageState();
}

class _MainFoodPageState extends State<MainFoodPage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        // backgroundColor: AppColors.buttonBackgroundColor,
        body: Container(
          child: Column(
            children: [
              Container(
                margin: EdgeInsets.only(top: 10, bottom: 15),
                padding: EdgeInsets.only(left: 10, right: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      children: [
                        BigText(
                          text: "Rajasthan",
                          color: AppColors.mainColor,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SmallText(text: "Jaipur"),
                            Icon(Icons.arrow_drop_down_rounded)
                          ],
                        )
                      ],
                    ),
                    Container(
                      alignment: Alignment.center,
                      height: 45,
                      width: 45,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(15),
                          color: AppColors.mainColor),
                      child: Icon(
                        Icons.search,
                        color: Colors.white,
                      ),
                    )
                  ],
                ),
              ),
              FoodPageBody(),
            ],
          ),
        ),
      ),
    );
  }
}
