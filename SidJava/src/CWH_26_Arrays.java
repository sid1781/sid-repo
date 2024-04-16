public class CWH_26_Arrays {
    public static void main(String[] args) {
//        1)Declaration and memory allocation
//        int[] mark = new int[5];

//        2)Declaration and then memory allocation
        int[] mark;
        mark=new int[5];
        mark[0]=2;
        mark[1]=2;
        mark[2]=3;
        mark[3]=4;
        mark[4]=5;
        System.out.println(mark[4]);
//        3)Declaration memory allocation and initialization together
        int[] arr= {1,2,3,45,5};
        System.out.println(arr[3]);
    }
}
