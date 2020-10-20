/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
    constructor(email, subject, points) {
        this.subject = subject;
        this.points = points;
        this.email = email;
    }

    average(){
        if(Array.isArray(this.points)){
          const jumlah = this.points.reduce((a, b) => a + b, 0)
          const panjang_array = this.points.length
          return (jumlah/panjang_array).toFixed(1)
        } 
        return this.points
    }
    
    predikat(){
        if(this.average() > 90){
            return "honour"
        }
        else if(this.average() > 80) {
            return "graduate"
        }
        else if(this.average() > 70) {
            return "participant"
        }  
    }
}

 
  /*=========================================== 
    2. SOAL Create Score (10 Poin + 5 Poin ES6)
    ===========================================
    Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
    Function viewScores mengolah data email dan nilai skor pada parameter array 
    lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
    Contoh: 
  
    Input
     
    data : 
    [
      ["email", "quiz-1", "quiz-2", "quiz-3"],
      ["abduh@mail.com", 78, 89, 90],
      ["khairun@mail.com", 95, 85, 88]
    ]
    subject: "quiz-1"
  
    Output 
    [
      {email: "abduh@mail.com", subject: "quiz-1", points: 78},
      {email: "khairun@mail.com", subject: "quiz-1", points: 95},
    ]
  */
  
  const data = [
    ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
  ]
  
  function viewScores(data, subject) {
    // code kamu di sini
    arrayListQuis = {
        'quiz-1' : [],
        'quiz-2' : [],
        'quiz-3' : []
      };
      data.forEach((item,i)=>{
        if(i > 0){
          const scoreQuiz1 = new Score(item[0],'quiz-1',item[1])
          const scoreQuiz2 = new Score(item[0],'quiz-2',item[2])
          const scoreQuiz3 = new Score(item[0],'quiz-3',item[3])
          arrayListQuis['quiz-1'].push(scoreQuiz1)
          arrayListQuis['quiz-2'].push(scoreQuiz2)
          arrayListQuis['quiz-3'].push(scoreQuiz3)
        }
      })
      console.log(arrayListQuis[subject])
  }
  
  // TEST CASE
  viewScores(data, "quiz-1")
  viewScores(data, "quiz-2")
  viewScores(data, "quiz-3")
  
  /*==========================================
    3. SOAL Recap Score (15 Poin + 5 Poin ES6)
    ==========================================
      Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
      Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
      predikat kelulusan ditentukan dari aturan berikut:
      nilai > 70 "participant"
      nilai > 80 "graduate"
      nilai > 90 "honour"
  
      output:
      1. Email: abduh@mail.com
      Rata-rata: 85.7
      Predikat: graduate
  
      2. Email: khairun@mail.com
      Rata-rata: 89.3
      Predikat: graduate
  
      3. Email: bondra@mail.com
      Rata-rata: 74.3
      Predikat: participant
  
      4. Email: regi@mail.com
      Rata-rata: 91
      Predikat: honour
  
  */
  
  function recapScores(data) {
    data.forEach((item,i)=>{
        if(i > 0){
          const points = [item[1],item[2],item[3]]
          const score = new Score(item[0],'Quiz', points)
          const string_result = ` ${i}. Email : ${score.email} 
 Rata-rata : ${score.average()} 
 Predikat : ${score.average()}`
          console.log(string_result)
        }
      })
    }

  recapScores(data);