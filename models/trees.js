import { getDatabase } from "../db/db.js";
import { ObjectId } from "mongodb";

const TreesModel = {
  async createTree() {
    const db = getDatabase();
    const result = await db.collection("trees").insertOne({ value: 0 });
    console.log("tree created");
    return result.insertedId;
  },

  async updateTreeValue() {
    const db = getDatabase();
    const newValue = (await this.getTreeValue()) + 1;
    const result = await db
      .collection("trees")
      .updateOne({}, { $set: { value: newValue } });
    return result.modifiedCount;
  },

  async getTreeValue() {
    const db = getDatabase();
    const tree = await db.collection("trees").findOne({});
    return tree ? tree.value : null;
  },
};

export default TreesModel;
