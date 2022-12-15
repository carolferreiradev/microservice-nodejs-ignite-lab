import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'example-recipient-id',
    });
    expect(notification).not.toBeNull();
  });
});
