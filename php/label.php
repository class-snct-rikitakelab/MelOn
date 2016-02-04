<?php
    class Label {

        private $lang;

        function __construct($language) {
            $this->lang = $language;
        }

        function returnTop() {
            $msg = array(
              "Japanese" => "トップに戻る",
              "Finnish" => "Takaisin alkuun",
              "English" => "Return Top");
            echo $msg[$this->lang];
        }

        function login() {
            $msg = array(
              "Japanese" => "ログイン",
              "Finnish" => "Kirjaudu sisään",
              "English" => "Login");
            echo $msg[$this->lang];
        }

        function registration() {
            $msg = array(
              "Japanese" => "ユーザーとうろく",
              "Finnish" => "käyttäjän rekisteröintiä",
              "English" => "User Registration");
            echo $msg[$this->lang];
        }

        function name() {
            $msg = array(
              "Japanese" => "なまえ",
              "Finnish" => "Nimi",
              "English" => "Name");
            echo $msg[$this->lang];
        }
        
        function password() {
            $msg = array(
              "Japanese" => "パスワード",
              "Finnish" => "Salasana",
              "English" => "Password");
            echo $msg[$this->lang];
        }

        function confirm() {
            $msg = array(
              "Japanese" => "パスワードかくにん",
              "Finnish" => "Vahvista Salasana",
              "English" => "Confirm Password");
            echo $msg[$this->lang];
        }

        function ok() {
            $msg = array(
              "Japanese" => "とうろく",
              "Finnish" => "OK",
              "English" => "OK");
            echo $msg[$this->lang];
        }
    }
?>