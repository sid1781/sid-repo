class Series{
    public static int fibSeries1(int n ){
        if (n==1 || n==2 )
        {
            return n-1;
        }
        else {
            return fibSeries1(n-1)+ fibSeries1(n-2);
        }
    }

    public static void Max(){
        int[]  arr={10,23,45};
        int max=0;
        for (int i = 0; i < arr.length; i++) {
             if (arr[i]>max){
                max = arr[i];
             }

        }
        System.out.println(max);

    }
    public static void main(String[] args) {

//        System.out.println(fibSeries1(5));
       Max();
    }
}




