<?php
header("Content-type:text/html;charset=utf-8");
/*******
每人13张，打一张摸一张
庄家14张
*********/
	//麻将发牌模块算法
	$majiang[0]=range(1,7);//东南西北中发白
	$majiang[1]=range(11,19);//1万2万3万4万5万6万7万8万9万
	$majiang[2]=range(21,29);//1条2条3条4条5条6条7条8条9条
	$majiang[3]=range(31,39);//1饼2饼3饼4饼5饼6饼7饼8饼9饼
	
	$majiang_136 = array();
	
	for($i=0;$i<=count($majiang)-1;$i++){
		//echo count($majiang[$i]);
		for($zi=0;$zi<=3;$zi++){
			foreach($majiang[$i] as $key => $mj){
				array_push($majiang_136,$mj);
			}
		}
		
		
		
	}
shuffle($majiang_136);//打乱数组 （洗牌）

	
	
	$majiangZhuangjia = array();//庄家牌 14张
	$majiang_wanjia1 = array();//玩家牌	13张
	$majiang_wanjia2 = array();//玩家牌	13张
	$majiang_wanjia3 = array();//玩家牌	13张
	

	for($i=1;$i<=14;$i++){//获取庄家牌
		array_push($majiangZhuangjia,array_pop($majiang_136));
		
	}
	
	for($i=1;$i<=13;$i++){//获取玩家牌
		array_push($majiang_wanjia1,array_pop($majiang_136));
		
	}
	
	for($i=1;$i<=13;$i++){//获取玩家牌
		array_push($majiang_wanjia2,array_pop($majiang_136));
		
	}
	
	for($i=1;$i<=13;$i++){//获取玩家牌
		array_push($majiang_wanjia3,array_pop($majiang_136));
		
	}
	
/* //原始数据打印
	var_dump($majiang_136);
	echo "<hr/>";
	var_dump($majiangZhuangjia);
	echo "<hr/>";
	var_dump($majiang_wanjia1);
	echo "<hr/>";
	var_dump($majiang_wanjia2);
	echo "<hr/>";
	var_dump($majiang_wanjia3);
	echo "<hr/>"; */
	
	
	
	echo "剩余的牌：".count($majiang_136);
	echo "<hr/>";
	echo "庄家牌：<br/>";
	for($i=0;$i<=count($majiangZhuangjia)-1;$i++){
		$num = $majiangZhuangjia[$i] / 10;
		$num = explode('.',$num); 
		
		
		switch ($num[0])
			{
			case 0://东南西北中发白
				switch($num[1]){
					case 1:
						 echo "东风"."\n";
						 break;
					case 2:
						echo "南风"."\n";
						break;
					case 3:
						 echo "西风"."\n";
						break;
					case 4:
						echo "北风"."\n";
						break;
					case 5:
						echo "红中"."\n";
						break;
					case 6:
						 echo "发财"."\n";
						break;
					case 7:
						echo "白皮"."\n";
						break;
					default:
						echo "数据异常！";
						
				}
			  break;  
			case 1://1万2万3万4万5万6万7万8万9万
			  echo $num[1]."万"."\n";
			  break;
			case 2://1条2条3条4条5条6条7条8条9条
			  echo $num[1]."条"."\n";
			  break;
			case 3://1饼2饼3饼4饼5饼6饼7饼8饼9饼
			   echo $num[1]."饼"."\n";
			  break;
			default:
			  echo "数据异常！";
			}
		
	}
	echo "<hr/>";
	echo "玩家1牌：<br/>";
	for($i=0;$i<=count($majiang_wanjia1)-1;$i++){
		$num = $majiang_wanjia1[$i] / 10;
		$num = explode('.',$num); 
		
		
		switch ($num[0])
			{
			case 0://东南西北中发白
				switch($num[1]){
					case 1:
						 echo "东风"."\n";
						 break;
					case 2:
						echo "南风"."\n";
						break;
					case 3:
						 echo "西风"."\n";
						break;
					case 4:
						echo "北风"."\n";
						break;
					case 5:
						echo "红中"."\n";
						break;
					case 6:
						 echo "发财"."\n";
						break;
					case 7:
						echo "白皮"."\n";
						break;
					default:
						echo "数据异常！";
						
				}
			  break;  
			case 1://1万2万3万4万5万6万7万8万9万
			  echo $num[1]."万"."\n";
			  break;
			case 2://1条2条3条4条5条6条7条8条9条
			  echo $num[1]."条"."\n";
			  break;
			case 3://1饼2饼3饼4饼5饼6饼7饼8饼9饼
			   echo $num[1]."饼"."\n";
			  break;
			default:
			  echo "数据异常！";
			}
		
	}
	
	echo "<hr/>";
	echo "玩家2牌：<br/>";
	for($i=0;$i<=count($majiang_wanjia2)-1;$i++){
		$num = $majiang_wanjia2[$i] / 10;
		$num = explode('.',$num); 
		
		
		switch ($num[0])
			{
			case 0://东南西北中发白
				switch($num[1]){
					case 1:
						 echo "东风"."\n";
						 break;
					case 2:
						echo "南风"."\n";
						break;
					case 3:
						 echo "西风"."\n";
						break;
					case 4:
						echo "北风"."\n";
						break;
					case 5:
						echo "红中"."\n";
						break;
					case 6:
						 echo "发财"."\n";
						break;
					case 7:
						echo "白皮"."\n";
						break;
					default:
						echo "数据异常！";
						
				}
			  break;  
			case 1://1万2万3万4万5万6万7万8万9万
			  echo $num[1]."万"."\n";
			  break;
			case 2://1条2条3条4条5条6条7条8条9条
			  echo $num[1]."条"."\n";
			  break;
			case 3://1饼2饼3饼4饼5饼6饼7饼8饼9饼
			   echo $num[1]."饼"."\n";
			  break;
			default:
			  echo "数据异常！";
			}
		
	}
	
	echo "<hr/>";
	echo "玩家3牌：<br/>";
	for($i=0;$i<=count($majiang_wanjia3)-1;$i++){
		$num = $majiang_wanjia3[$i] / 10;
		$num = explode('.',$num); 
		
		
		switch ($num[0])
			{
			case 0://东南西北中发白
				switch($num[1]){
					case 1:
						 echo "东风"."\n";
						 break;
					case 2:
						echo "南风"."\n";
						break;
					case 3:
						 echo "西风"."\n";
						break;
					case 4:
						echo "北风"."\n";
						break;
					case 5:
						echo "红中"."\n";
						break;
					case 6:
						 echo "发财"."\n";
						break;
					case 7:
						echo "白皮"."\n";
						break;
					default:
						echo "数据异常！";
						
				}
			  break;  
			case 1://1万2万3万4万5万6万7万8万9万
			  echo $num[1]."万"."\n";
			  break;
			case 2://1条2条3条4条5条6条7条8条9条
			  echo $num[1]."条"."\n";
			  break;
			case 3://1饼2饼3饼4饼5饼6饼7饼8饼9饼
			   echo $num[1]."饼"."\n";
			  break;
			default:
			  echo "数据异常！";
			}
		
	}
	