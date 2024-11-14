unsigned int ADCValue;

#include <Servo.h>
Servo servo;
int servoPin = D6;
int pos = 0;

// Définition des numéros de port
const int trigPin = D7;   // Trigger (emission)
const int echoPin = D8;   // Echo (réception)
const int trigPin1 = D1;  // Trigger (emission)
const int echoPin1 = D2;  // Echo (réception)
// Variables utiles
long duree;     // durée de l'echo
int distance;   // distance
long duree1;    // durée de l'echo
int distance1;  // distance
void setup() {
  servo.attach(servoPin);
  servo.write(0);

  pinMode(trigPin, OUTPUT);   // Configuration du port du Trigger comme une SORTIE
  pinMode(echoPin, INPUT);    // Configuration du port de l'Echo comme une ENTREE
  pinMode(trigPin1, OUTPUT);  // Configuration du port du Trigger comme une SORTIE
  pinMode(echoPin1, INPUT);   // Configuration du port de l'Echo comme une ENTREE
  Serial.begin(9600);         // Démarrage de la communication série
}


void loop() {

  // Émission d'un signal de durée 10 microsecondes
  digitalWrite(trigPin, LOW);
  delay(1000);
  digitalWrite(trigPin, HIGH);
  delay(1000);
  digitalWrite(trigPin, LOW);
  // Écoute de l'écho
  duree = pulseIn(echoPin, HIGH);

  // Calcul de la distance
  distance = duree * 0.034 / 2;
  // Affichage de la distance dans le Moniteur Série
  Serial.print("Distance : ");
  Serial.print(distance);
  Serial.println("cm");

  //-------------

  // Émission d'un signal de durée 10 microsecondes
  digitalWrite(trigPin1, LOW);
  delay(1000);
  digitalWrite(trigPin1, HIGH);
  delay(1000);
  digitalWrite(trigPin1, LOW);
  // Écoute de l'écho
  duree1 = pulseIn(echoPin1, HIGH);
  // Calcul de la distance
  distance1 = duree1 * 0.034 / 2;
  // Affichage de la distance dans le Moniteur Série
  Serial.print("Distance1 : ");
  Serial.print(distance1);
  Serial.println("cm");


  if ((distance < 20) && (distance1 > 8)) {
    // in steps of 1 degree
    openBarrier();   // Appel de la fonction pour ouvrir la barrière
    delay(7000);     // Attente de 5 secondes avant de fermer la barrière
    closeBarrier();  // tell servo to go to position in variable 'pos'

  } else {
    closeBarrier();
    delay(5000);  // Attente de 5 secondes avant de fermer la barrière
  }
}
  // Fonction pour ouvrir la barrière
  void openBarrier() {
    servo.write(90);  // Angle à 90 degrés (position ouverte)
    delay(1000);      // Attente d'une seconde pour laisser le temps à la barrière de s'ouvrir complètement
  }

  // Fonction pour fermer la barrière
  void closeBarrier() {
    servo.write(0);  // Angle à 0 degrés (position fermée)
    delay(1000);     // Attente d'une seconde pour laisser le temps à la barrière de se fermer complètement
  }
