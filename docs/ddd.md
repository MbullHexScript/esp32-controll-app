# Database Design Document (DDD)

# Smart Home Ecosystem

Version: 1.0.0

Author: Naufal

---

# 1. Introduction

## 1.1 Purpose

Dokumen ini menjelaskan desain database Smart Home Ecosystem yang akan digunakan sebagai pusat penyimpanan seluruh data aplikasi.

Database dirancang menggunakan PostgreSQL melalui Supabase dengan mempertimbangkan:

- Scalability
- Security
- Realtime
- Maintainability
- Multi User
- Multi Device

---

# 2. Database Technology

Database Engine

- PostgreSQL

Platform

- Supabase

Features

- Authentication
- Row Level Security
- Realtime
- Storage
- SQL Functions

---

# 3. Database Design Principles

Database dirancang berdasarkan prinsip:

- Normalize First
- UUID Primary Key
- Soft Delete Ready
- Audit Friendly
- Future Scalability
- Multi Home Ready
- Multi Device Ready

---

# 4. Entity Relationship Overview

```text
Users
 │
 ├────── Homes
 │          │
 │          ├────── Rooms
 │          │           │
 │          │           ├──── Devices
 │          │                       │
 │          │                       ├──── Relays
 │          │                       ├──── Sensors
 │          │                       ├──── Logs
 │          │                       ├──── Schedules
 │          │                       └──── Device Config
 │
 └──── Assistant History
```

---

# 5. Table List

Core Tables

- users
- homes
- rooms
- devices
- relays
- sensors
- schedules
- logs
- notifications
- assistant_history
- device_configs

---

# 6. Table : users

Purpose

Menyimpan informasi pengguna.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| fullname | TEXT |
| email | TEXT |
| avatar_url | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

Relationship

One User

↓

Many Homes

---

# 7. Table : homes

Purpose

Mendukung Multi Home.

Contoh:

- Rumah
- Kantor
- Laboratorium

Columns

| Column | Type |
|---------|------|
| id | UUID |
| owner_id | UUID |
| name | TEXT |
| address | TEXT |
| created_at | TIMESTAMP |

Relationship

One Home

↓

Many Rooms

---

# 8. Table : rooms

Purpose

Mengelompokkan perangkat.

Contoh

- Living Room
- Bedroom
- Kitchen
- Garage

Columns

| Column | Type |
|---------|------|
| id | UUID |
| home_id | UUID |
| name | TEXT |
| icon | TEXT |
| created_at | TIMESTAMP |

Relationship

One Room

↓

Many Devices

---

# 9. Table : devices

Purpose

Menyimpan seluruh perangkat IoT.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| room_id | UUID |
| device_uid | TEXT |
| device_name | TEXT |
| device_type | TEXT |
| firmware_version | TEXT |
| ip_address | TEXT |
| mac_address | TEXT |
| wifi_ssid | TEXT |
| mqtt_topic | TEXT |
| status | BOOLEAN |
| last_seen | TIMESTAMP |
| created_at | TIMESTAMP |

Device Type

- ESP32
- ESP8266
- Raspberry Pi

---

# 10. Table : relays

Purpose

Menyimpan seluruh relay pada device.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| device_id | UUID |
| relay_number | INTEGER |
| relay_name | TEXT |
| relay_type | TEXT |
| current_state | BOOLEAN |
| created_at | TIMESTAMP |

Relay Type

- Lamp
- Fan
- Plug
- Pump
- Door

---

# 11. Table : sensors

Purpose

Menyimpan sensor.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| device_id | UUID |
| sensor_name | TEXT |
| sensor_type | TEXT |
| current_value | FLOAT |
| unit | TEXT |
| updated_at | TIMESTAMP |

Sensor Type

- Temperature
- Humidity
- Motion
- Light
- Soil Moisture

---

# 12. Table : schedules

Purpose

Automation.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| relay_id | UUID |
| action | TEXT |
| schedule_time | TIME |
| repeat_days | TEXT |
| enabled | BOOLEAN |
| created_at | TIMESTAMP |

Action

- ON
- OFF

---

# 13. Table : logs

Purpose

Activity History.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| device_id | UUID |
| relay_id | UUID |
| action | TEXT |
| source | TEXT |
| message | TEXT |
| created_at | TIMESTAMP |

Source

- Dashboard
- Assistant
- Scheduler
- MQTT
- Manual Button

---

# 14. Table : notifications

Purpose

Push Notification.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| title | TEXT |
| message | TEXT |
| read | BOOLEAN |
| created_at | TIMESTAMP |

---

# 15. Table : assistant_history

Purpose

Riwayat percakapan AI.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| prompt | TEXT |
| response | TEXT |
| created_at | TIMESTAMP |

---

# 16. Table : device_configs

Purpose

Konfigurasi perangkat.

Columns

| Column | Type |
|---------|------|
| id | UUID |
| device_id | UUID |
| timezone | TEXT |
| heartbeat_interval | INTEGER |
| reconnect_interval | INTEGER |
| firmware_auto_update | BOOLEAN |

---

# 17. Relationship Diagram

```text
User
 │
 ├── Home
 │      │
 │      ├── Room
 │      │      │
 │      │      └── Device
 │      │              │
 │      │              ├── Relay
 │      │              ├── Sensor
 │      │              ├── Schedule
 │      │              ├── Log
 │      │              └── Config
 │
 ├── Notification
 │
 └── Assistant History
```

---

# 18. Row Level Security (RLS)

Policy

User hanya dapat:

- Melihat Home miliknya
- Melihat Device miliknya
- Mengontrol Device miliknya
- Mengakses Logs miliknya
- Mengakses Scheduler miliknya

Semua query harus difilter menggunakan:

owner_id = auth.uid()

---

# 19. Database Indexing

Index yang digunakan:

devices.device_uid

devices.room_id

devices.last_seen

logs.created_at

logs.device_id

schedules.relay_id

notifications.user_id

assistant_history.user_id

---

# 20. Realtime Tables

Menggunakan Supabase Realtime.

Realtime aktif pada:

- devices
- relays
- sensors
- logs
- notifications

---

# 21. Data Retention

Logs

90 Hari

Notification

30 Hari

Assistant History

365 Hari

---

# 22. Backup Strategy

- Daily Backup
- Weekly Snapshot
- Monthly Archive

---

# 23. Future Tables

Version Berikutnya

- automations
- scenes
- device_groups
- energy_usage
- firmware_versions
- ota_jobs
- voice_commands
- weather_data
- ai_recommendations
- integrations
- permissions
- home_members
- audit_logs

---

# 24. Naming Convention

Table

snake_case

Column

snake_case

Primary Key

id

Foreign Key

entity_id

Timestamp

created_at

updated_at

deleted_at

---

# 25. UUID Convention

Semua Primary Key menggunakan UUID.

Contoh

users.id

homes.id

rooms.id

devices.id

relays.id

---

# 26. Database Philosophy

Database dirancang sebagai fondasi Smart Home Ecosystem yang mampu berkembang dari proyek Smart Lamp sederhana menjadi platform Smart Home berskala besar.

Struktur database mendukung:

- Multi User
- Multi Home
- Multi Room
- Multi Device
- Multi Relay
- Multi Sensor
- AI Assistant
- Automation
- Notification
- OTA Firmware
- Analytics

tanpa memerlukan perubahan besar pada struktur inti database.
