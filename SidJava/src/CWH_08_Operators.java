public class CWH_08_Operators {
    public static void main(String[] args) {

        //1)Arthmatic operators
        int a=5;
        int b=a-4;
        int c=a*b;
        int d=a/b;
        int e=c%a;
        int f =a++;
        int g=a--;

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
        System.out.println(f);
        System.out.println(g);

        //2)Assignment operators
        int h=5;
        System.out.println(h);
          h +=1;
        System.out.println(h);
          h *=5;
        System.out.println(h);
          h -=4;
        System.out.println(h);
          h /=5;
        System.out.println(h);

     //3)Comparison operator
        System.out.println(6==6);
        System.out.println(6<=7);
        System.out.println(7>=6);
        System.out.println(7<5);
        System.out.println(7>5);
     //4)Logical operator
        System.out.println(66>55 && 66>44);
        System.out.println(65>54 || 65<67);
        System.out.println(65!=65);
        //5)Bitwise operators
        System.out.println(3&2);
    }
}
