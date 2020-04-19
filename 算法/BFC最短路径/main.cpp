#include <iostream>

using namespace std;

int main()
{
   int m, n;
   cin>>m>>n;
   int arr[m][n];
   for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            cin>>arr[i][j];
        }
   }


   int ary[m][n] = {0};
   ary[0][0] = arr[0][0];
   for(int i=1; i<m; i++){
        ary[i][0] = ary[i-1][0] + arr[i][0];
   }
   for(int j=1; j<n; j++){
        ary[0][j] = ary[0][j-1] + arr[0][j];
   }

   for(int i=1; i<m; i++){
        for(int j=1; j<n; j++){
            ary[i][j] = min(ary[i-1][j], ary[i][j-1]) + arr[i][j];
        }
   }

   cout<<ary[m-1][n-1];




}

   int min(int a, int b){
       return a<b? a : b;
   }


