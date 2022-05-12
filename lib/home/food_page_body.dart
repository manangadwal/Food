import 'package:dots_indicator/dots_indicator.dart';
import 'package:flutter/material.dart';
import 'package:food/utils/colors.dart';
import 'package:food/widgets/big_text.dart';
import 'package:food/widgets/icon_and_text_widget.dart';
import 'package:food/widgets/small_text.dart';

class FoodPageBody extends StatefulWidget {
  const FoodPageBody({Key? key}) : super(key: key);

  @override
  State<FoodPageBody> createState() => _FoodPageBodyState();
}

class _FoodPageBodyState extends State<FoodPageBody> {
  PageController pageController = PageController(
    viewportFraction: .85,
  );
  var _currPageValue = 0.0;
  double _scaleFactor = 0.8;
  double _height = 220;

  Matrix4 scaleFactor(int Index) {
    Matrix4 matrix4 = Matrix4.identity();
    if (Index == _currPageValue.floor()) {
      var currScale = 1 - (_currPageValue - Index) * (1 - _scaleFactor);
      var currTrans = _height * (1 - currScale) / 2;
      matrix4 = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    } else if (Index == _currPageValue.floor() + 1) {
      var currScale =
          _scaleFactor + (_currPageValue - Index + 1) * (1 - _scaleFactor);
      var currTrans = _height * (1 - currScale) / 2;

      matrix4 = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    } else if (Index == _currPageValue.floor() - 1) {
      var currScale = 1 - (_currPageValue - Index) * (1 - _scaleFactor);

      var currTrans = _height * (1 - currScale) / 2;

      matrix4 = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    } else {
      var currScale = 0.8;
      var currTrans = _height * (1 - currScale) / 2;
      matrix4 = Matrix4.diagonal3Values(1, currScale, 1)
        ..setTranslationRaw(0, currTrans, 0);
    }

    return matrix4;
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    pageController.addListener(() {
      setState(() {
        _currPageValue = pageController.page!;
        print(_currPageValue.toString());
      });
    });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    pageController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          // color: Colors.black,
          height: 280,
          child: PageView.builder(
            controller: pageController,
            physics: BouncingScrollPhysics(),
            itemCount: 5,
            itemBuilder: (context, position) {
              return _buildPageItem(
                position,
              );
            },
          ),
        ),
        DotsIndicator(
          dotsCount: 5,
          position: _currPageValue,
          decorator: DotsDecorator(
            activeColor: AppColors.mainColor,
            size: const Size.square(9.0),
            activeSize: const Size(18.0, 9.0),
            activeShape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5.0)),
          ),
        ),
      ],
    );
  }

  Widget _buildPageItem(int Index) {
    Matrix4 matrix4 = scaleFactor(Index);

    return Transform(
      transform: matrix4,
      child: Stack(
        children: [
          Container(
            height: 210,
            margin: EdgeInsets.symmetric(horizontal: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              color: Index.isEven ? AppColors.mainColor : AppColors.signColor,
              image: DecorationImage(
                fit: BoxFit.cover,
                image: AssetImage('assets/image/food0.png'),
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              height: 120,
              margin: EdgeInsets.only(left: 25, right: 25, bottom: 10),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Color(0xFFe8e8e8),
                      spreadRadius: 1,
                      blurRadius: 5,
                      offset: Offset(0, 3), //1:23
                    ),
                    BoxShadow(
                      color: Colors.white,
                      spreadRadius: 1,
                      // blurRadius: 5,
                      offset: Offset(-3, 0),
                    ),
                    BoxShadow(
                      color: Colors.white,
                      spreadRadius: 1,
                      // blurRadius: 5,
                      offset: Offset(3, 0),
                    ),
                  ]),
              child: Container(
                padding: EdgeInsets.only(top: 15, left: 15, right: 15),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    BigText(text: "Chinese Side"),
                    SizedBox(height: 10),
                    Row(
                      children: [
                        Wrap(
                          children: List.generate(
                            5,
                            (index) => Icon(
                              Icons.star,
                              color: AppColors.mainColor,
                              size: 15,
                            ),
                          ),
                        ),
                        SizedBox(width: 10),
                        SmallText(text: "4.5", color: AppColors.signColor),
                        SizedBox(width: 10),
                        SmallText(
                            text: "1287  comments", color: AppColors.signColor),
                      ],
                    ),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconAndText(
                            icon: Icons.circle_sharp,
                            text: "Normal",
                            color: AppColors.signColor,
                            iconColor: AppColors.iconColor1),
                        IconAndText(
                            icon: Icons.location_on,
                            text: "1.8km",
                            color: AppColors.signColor,
                            iconColor: AppColors.mainColor),
                        IconAndText(
                            icon: Icons.access_time,
                            text: "32min",
                            color: AppColors.signColor,
                            iconColor: AppColors.iconColor2),
                      ],
                    )
                  ],
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
