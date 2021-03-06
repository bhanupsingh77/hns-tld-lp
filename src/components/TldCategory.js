import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "../modules/TldCategory.module.css";
import TldCategoryList from "../categorys/TldCategoryList.js";
import Emojis from "../categorys/Emojis.js";
import AdultNames from "../categorys/AdultNames.js";
import ThreeLetter from "../categorys/ThreeLetter.js";
import TwoLetter from "../categorys/TwoLetter.js";
import TopPicks from "../categorys/TopPicks.js";

export default function TldCategory() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/" exact component={TldCategoryList} />
        <Route path="/tld" exact component={TldCategoryList} />
        <Route path="/tld/category/topPicks" component={TopPicks} />
        <Route path="/tld/category/emojis" component={Emojis} />
        <Route path="/tld/category/names" component={AdultNames} />
        <Route path="/tld/category/threeLetter" component={ThreeLetter} />
        <Route path="/tld/category/twoLetter" component={TwoLetter} />
      </Switch>
    </div>
  );
}
