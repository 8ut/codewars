//8kyu https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/java
//Even or Odd 9/1/22

public class solution050 {
    public static String even_or_odd(int number) {
      
      String ans;
      
      if(number % 2 == 0){
        System.out.println("Even");
        ans = "Even";
  }else{
        System.out.println("Odd");
        ans = "Odd";
      }
      
      return ans;
        
    }
}