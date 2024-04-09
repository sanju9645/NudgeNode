/*
* Functions associated with Heartbeat table
*/

class HeartbeatService {
  constructor(HeartbeatModel) {
    this.HeartbeatModel = HeartbeatModel;
  }

  async heartbeatById(id) {
    return await UtilsLib.immediateExpr(async () => {
      const heartbeat = await this.HeartbeatModel.findOne({ _id: id });

      if (heartbeat) {
        return heartbeat;
      }

      return null;
    });
  }

  async allheartbeats() {
    return await UtilsLib.immediateExpr(async () => {
      const heartbeats = await this.HeartbeatModel.find();
      if (heartbeats) {
        return heartbeats;
      }

      return null;
    });
  }

  async heartbeatsByUserId(userId) {
    return await UtilsLib.immediateExpr(async () => {
      const heartbeats = await this.HeartbeatModel.find({
        $or: [{ romeo: userId }, { juliet: userId }]
      }, { romeo: 1, juliet: 1, identifier: 1 });

      const userIds = heartbeats.map(heartbeat => ({
        userId: heartbeat.romeo.toString() === userId.toString() ? heartbeat.juliet.toString() : heartbeat.romeo.toString(),
        identifier: heartbeat.identifier
      }));

      const uniqueIdentifiers = {};
      const filteredCollection = userIds.filter(item => {
        if (uniqueIdentifiers[item.identifier]) {
          return false;
        } else {
          uniqueIdentifiers[item.identifier] = true;
          return true;
        }
      });
      
      const users = await Promise.all(filteredCollection.map(async (filteredCollection) => {
        const user = await userOps.userById(filteredCollection.userId);
        const newUser = {
          _id         : user._id,
          email       : user.email,
          name        : user.name,
          isAdmin     : user.isAdmin,
          createdAt   : user.createdAt,
          updatedAt   : user.updatedAt,
          identifier  : filteredCollection.identifier,
          profilePicture : user.profilePicture
        }

        return newUser;
      }));

      return users.filter(user => user !== null);
    });
  }

  async heartbeatByidentifier(identifier) {
    return await UtilsLib.immediateExpr(async () => {
      const heartbeat = await this.HeartbeatModel.findOne({ identifier });

      if (heartbeat) {
        return heartbeat;
      }

      return null;
    });
  }

  async heartbeatByidentifierAndUserId(identifier, userId) {
    return await UtilsLib.immediateExpr(async () => {
      const heartbeat = await this.HeartbeatModel.findOne({ identifier });
      let recipientId = heartbeat.romeo;

      if (heartbeat.romeo.toString() == userId) {
        recipientId = heartbeat.juliet;
      }
      const recipient = await userOps.userById(recipientId);

      const heartbeatUser = {
        recipientId             : recipient._id,
        recipientEmail          : recipient.email,
        recipientName           : recipient.name,
        recipientIsAdmin        : recipient.isAdmin,
        recipientCreatedAt      : recipient.createdAt,
        recipientUpdatedAt      : recipient.updatedAt,
        recipientProfilePicture : recipient.profilePicture,
        heartbeatId         : heartbeat._id,
        heartbeatDeleted    : heartbeat.deleted,
        heartbeatBlocked    : heartbeat.blocked,
        heartbeatArchived   : heartbeat.archived,
        heartbeatCreated    : heartbeat.created,
        heartbeatIdentifier : identifier
      }

      if (heartbeatUser) {
        return heartbeatUser;
      }

      return null;
    });
  }
};

module.exports = new HeartbeatService(HeartbeatModel);
