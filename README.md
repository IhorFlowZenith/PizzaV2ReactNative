# 🍕 PizzaV2

A modern, dark-themed pizza ordering app built with **React Native**. Browse the menu, customize your order, and track your order history — all from a sleek mobile interface.

---

## 📱 Screenshots

<div align="center">

<table>
  <tr>
    <td align="center"><b>Onboarding</b></td>
    <td align="center"><b>Login</b></td>
    <td align="center"><b>Login (filled)</b></td>
  </tr>
  <tr>
    <td><img src="OnboardingScreen.jpg" width="200"/></td>
    <td><img src="phoneloginscreen.jpg" width="200"/></td>
    <td><img src="phoneloginscreen2.jpg" width="200"/></td>
  </tr>
  <tr>
    <td align="center"><b>OTP Verification</b></td>
    <td align="center"><b>Home</b></td>
    <td align="center"><b>Pizza Detail</b></td>
  </tr>
  <tr>
    <td><img src="otpverificationscreen.jpg" width="200"/></td>
    <td><img src="HomeScreen.jpg" width="200"/></td>
    <td><img src="PizzaDetailScreen.jpg" width="200"/></td>
  </tr>
  <tr>
    <td align="center"><b>Cart</b></td>
    <td align="center"><b>Order History</b></td>
    <td align="center"><b>Profile</b></td>
  </tr>
  <tr>
    <td><img src="cartScreen.jpg" width="200"/></td>
    <td><img src="OrderScreen.jpg" width="200"/></td>
    <td><img src="ProfileScreen.jpg" width="200"/></td>
  </tr>
</table>

</div>

---

## ✨ Features

- **Onboarding & Auth** — Phone number login with OTP verification flow
- **Home Screen** — Browse all pizzas with live search by name or ingredient
- **Pizza Detail** — Choose size (S/M/L), adjust quantity, and add to cart
- **Cart** — Manage items, update quantities, and see the total price
- **Order History** — View past orders with status badges (Cooking, Delivered, Canceled, etc.)
- **Profile** — User info, menu blocks, and logout
- **Custom Bottom Navigation** — Floating tab bar with cart badge counter

---

## 🛠 Tech Stack

| Technology | Version |
|---|---|
| React Native | 0.76.9 |
| React | 18.3.1 |
| TypeScript | 5.0.4 |
| React Navigation | 7.x |
| React Native Reanimated | 3.16.7 |
| React Native Screens | 4.4.0 |
| React Native Gesture Handler | 2.20.2 |

---

## 📁 Project Structure

```
src/
├── assets/             # Images and static files
├── components/         # Reusable UI components
│   ├── AppButton.tsx
│   ├── BottomNavigation.tsx
│   ├── CartCard.tsx
│   ├── OrderCard.tsx
│   └── PizzaCard.tsx
├── constants/          # Static data and enums
│   ├── Orderbadge.ts
│   └── Pizza.ts
├── context/            # Global state
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── navigation/         # Navigation structure
│   ├── AppNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── TabNavigator.tsx
└── screens/            # App screens
    ├── CartScreen.tsx
    ├── HomeScreen.tsx
    ├── OnboardingScreen.tsx
    ├── OrderHistoryScreen.tsx
    ├── OtpVerificationScreen.tsx
    ├── PhoneLoginScreen.tsx
    ├── PizzaDetailScreen.tsx
    └── ProfileScreen.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Android Studio + Android SDK
- JDK 17
- React Native CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/PizzaV2.git
cd PizzaV2

# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# Run on Android (in a separate terminal)
npx react-native run-android
```

### Build APK

```bash
cd android
./gradlew assembleDebug
```

The APK will be available at `android/app/build/outputs/apk/debug/app-debug.apk`.

---

## ⚙️ Configuration

Key settings in `android/gradle.properties`:

```properties
hermesEnabled=true        # Hermes JS engine
newArchEnabled=false      # React Native new architecture
reactNativeArchitectures=arm64-v8a
```

---

## 🎨 Design

The app uses a consistent dark design system:

| Token | Value |
|---|---|
| Background | `#0F0F0F` |
| Surface | `#161616` / `#1A1A1A` |
| Accent | `#FF6B03` |
| Border | `#262626` |
| Muted text | `#5F636A` / `#94A3AF` |

---

## 📦 Context / State Management

- **AuthContext** — Handles `isAuthenticated`, `login()`, and `logout()`
- **CartContext** — Manages cart items, quantities, total count, and total price

---

## 🗺 Navigation Structure

```
AppNavigator
├── AuthNavigator (unauthenticated)
│   ├── OnboardingScreen
│   ├── PhoneLoginScreen
│   └── OtpVerificationScreen
└── TabNavigator (authenticated)
    ├── Home → HomeScreen → PizzaDetailScreen
    ├── History → OrderHistoryScreen
    ├── Cart → CartScreen
    └── Profile → ProfileScreen
```

---

## 📄 License

This project is for educational purposes. Feel free to use it as a reference or starting point for your own projects.