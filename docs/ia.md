# Information Architecture (IA)

# HomeLynk

Version: 1.0

---

# 1. Overview

Information Architecture (IA) mendefinisikan bagaimana seluruh halaman, fitur, dan navigasi HomeLynk saling terhubung sehingga pengguna dapat menggunakan aplikasi dengan mudah dan intuitif.

Filosofi utama HomeLynk adalah:

> Everything within three taps.

Artinya, seluruh fitur penting harus dapat diakses maksimal dalam tiga langkah.

---

# 2. Navigation Structure

```text
HomeLynk

├── Dashboard
│
├── Rooms
│
├── Devices
│
├── Automation
│
├── Activity
│
├── Assistant
│
└── Settings
```

---

# 3. Navigation Type

Platform menggunakan:

Bottom Navigation

untuk Mobile

Sidebar Navigation

untuk Tablet dan Desktop

---

# 4. Bottom Navigation

Mobile terdiri dari lima menu utama.

```text
Dashboard

Rooms

+

Activity

Settings
```

Tombol "+" berada di tengah sebagai Quick Action.

---

# 5. Dashboard

Dashboard merupakan halaman pertama yang dibuka setelah login.

Tujuan:

Memberikan gambaran kondisi rumah secara keseluruhan.

---

Dashboard terdiri dari:

- Greeting
- Home Status
- Weather
- Device Summary
- Quick Actions
- Favorite Devices
- Rooms Preview
- Recent Activity

---

Hierarchy

```text
Dashboard

│

├── Greeting

├── Home Status

├── Weather

├── Quick Actions

├── Favorite Devices

├── Rooms

└── Recent Activity
```

---

# 6. Rooms

Halaman Rooms menampilkan seluruh ruangan.

Contoh

```text
Living Room

Bedroom

Kitchen

Garage

Office
```

Setiap Room memiliki:

- Jumlah Device
- Online Status
- Quick Control

---

Room Detail

```text
Room

│

├── Devices

├── Sensors

├── Automation

└── Activity
```

---

# 7. Devices

Halaman Device menampilkan seluruh perangkat.

Kategori

- Lamp
- Fan
- Plug
- Sensor
- Door Lock

---

Setiap Device menampilkan:

- Icon
- Status
- Last Seen
- Signal
- Battery (Future)
- Firmware Version

---

Device Detail

```text
Device

│

├── Information

├── Controls

├── Scheduler

├── Statistics

├── Configuration

└── Logs
```

---

# 8. Automation

Automation merupakan pusat pengaturan otomatisasi.

Menu

- Schedule
- Smart Scene
- Rules

---

Schedule

```text
Jam

↓

Action

↓

Repeat
```

---

Scene

Contoh

Morning

Movie

Study

Sleep

Away

---

Rules

Contoh

IF

Motion Detected

THEN

Lamp ON

---

# 9. Activity

Menampilkan seluruh aktivitas perangkat.

Kategori

- Device
- User
- Automation
- Assistant

---

Setiap Log menampilkan:

- Icon
- Time
- Device
- Action

---

# 10. Assistant

Assistant menjadi pusat interaksi AI.

Halaman terdiri dari:

Chat

↓

Suggestion

↓

History

---

Contoh Prompt

Turn on living room light

Turn off all devices

Activate sleep mode

---

Future

Voice Assistant

---

# 11. Settings

Halaman pengaturan aplikasi.

Menu

- Profile
- Home
- Devices
- Theme
- Notification
- Security
- About

---

# 12. Add Device Flow

```text
Dashboard

↓

+

↓

Add Device

↓

Search Device

↓

Select Device

↓

Pair Device

↓

Configure

↓

Done
```

---

# 13. Device Pairing

Tahapan Pairing

```text
Open Pairing

↓

Search ESP32

↓

Connect

↓

Register Device

↓

Assign Room

↓

Rename

↓

Finish
```

---

# 14. Scheduler Flow

```text
Automation

↓

Create Schedule

↓

Select Device

↓

Action

↓

Time

↓

Repeat

↓

Save
```

---

# 15. AI Assistant Flow

```text
Assistant

↓

Input Prompt

↓

AI Understanding

↓

Confirmation

↓

Execute

↓

MQTT

↓

ESP32

↓

Status Updated
```

---

# 16. User Flow

First Time User

```text
Splash

↓

Login

↓

Dashboard

↓

Add Device

↓

Pair

↓

Done
```

---

Daily Usage

```text
Open App

↓

Dashboard

↓

Control Device

↓

Done
```

---

Automation Usage

```text
Dashboard

↓

Automation

↓

Create Schedule

↓

Save
```

---

# 17. Search Flow

Global Search mampu mencari:

- Device
- Room
- Automation
- Activity

---

# 18. Notification Flow

Notification

↓

Tap Notification

↓

Open Detail

↓

Related Device

---

# 19. Navigation Philosophy

Pengguna tidak boleh merasa tersesat.

Setiap halaman harus memiliki:

- Back Navigation
- Breadcrumb (Desktop)
- Consistent Header

---

# 20. Screen Hierarchy

```text
Authentication

│

├── Splash

├── Login

├── Register

└── Forgot Password

────────────────────────

Main App

│

├── Dashboard

├── Rooms

│     └── Room Detail

├── Devices

│     └── Device Detail

├── Automation

│     ├── Scheduler

│     ├── Scene

│     └── Rules

├── Activity

├── Assistant

└── Settings
```

---

# 21. Information Priority

Dashboard

1. Home Status
2. Quick Actions
3. Favorite Devices
4. Room Overview
5. Activity

---

Device Detail

1. Device Status
2. Controls
3. Scheduler
4. Statistics
5. Configuration
6. Logs

---

# 22. UX Principles

- Mobile First
- Three Tap Rule
- Minimal Interaction
- Clear Feedback
- Predictable Navigation
- Progressive Disclosure
- Consistent Layout

---

# 23. Future Navigation

Version berikutnya akan menambahkan:

- Smart Camera
- Energy Dashboard
- OTA Update
- AI Recommendation
- Voice Assistant
- Multi Home
- Family Management

Tanpa mengubah struktur navigasi utama.

---

# 24. Summary

Information Architecture HomeLynk dirancang agar sederhana, konsisten, dan mudah dipahami. Setiap halaman memiliki tujuan yang jelas serta hubungan yang terstruktur sehingga pengguna dapat mengakses seluruh fitur penting dengan cepat tanpa harus mempelajari aplikasi secara mendalam.

Pendekatan ini memastikan HomeLynk tetap nyaman digunakan baik oleh pengguna baru maupun pengguna berpengalaman, sekaligus menyediakan fondasi yang kuat untuk pengembangan fitur-fitur Smart Home di masa depan.
